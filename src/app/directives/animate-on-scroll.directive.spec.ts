import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';

@Component({
  template: `
    <div appAnimateOnScroll animationClass="fade-in" [triggerOnce]="triggerOnce" [threshold]="threshold" [delay]="delay">
      Test Element
    </div>
  `,
})
class TestComponent {
  triggerOnce = true;
  threshold = 0.1;
  delay = 0;
}

describe('AnimateOnScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;
  let directive: AnimateOnScrollDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [AnimateOnScrollDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    element = fixture.debugElement.query(By.directive(AnimateOnScrollDirective));
    directive = element.injector.get(AnimateOnScrollDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should not have the "active" class initially', () => {
    expect(element.nativeElement.classList.contains('active')).toBeFalse();
  });

  it('should add the "active" class when intersecting', fakeAsync(() => {
    // Simulate intersection
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({
        top: 0,
        bottom: 100,
        left: 0,
        right: 100,
        width: 100,
        height: 100,
      }),
    });

    const intersectionObserverCallback = (directive as any).observer.callback;
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement }]);
    tick(directive.delay); // Wait for the delay

    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeTrue();
  }));

  it('should remove the "active" class when not intersecting if triggerOnce is false', fakeAsync(() => {
    fixture.componentInstance.triggerOnce = false;
    fixture.detectChanges();

    // Simulate intersection
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({ ...element.nativeElement.getBoundingClientRect(), top: 0 }),
    });
    const intersectionObserverCallback = (directive as any).observer.callback;
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement }]);
    tick(directive.delay);
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeTrue();

    // Simulate not intersecting
    intersectionObserverCallback([{ isIntersecting: false, target: element.nativeElement }]);
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeFalse();
  }));

  it('should unobserve the element after intersecting if triggerOnce is true', fakeAsync(() => {
    // Spy on the unobserve method
    const unobserveSpy = spyOn((directive as any).observer, 'unobserve');

    // Simulate intersection
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({ top: 0, bottom: 100, left: 0, right: 100, width: 100, height: 100 }),
    });
    const intersectionObserverCallback = (directive as any).observer.callback;
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement }]);
    tick(directive.delay);

    expect(unobserveSpy).toHaveBeenCalledWith(element.nativeElement);
  }));

  it('should respect the threshold input', fakeAsync(() => {
    fixture.componentInstance.threshold = 0.5;
    fixture.detectChanges();

    // Simulate intersection with less than the threshold
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({ top: 50, bottom: 100, left: 0, right: 100, width: 100, height: 100 }),
    });
    const intersectionObserverCallback = (directive as any).observer.callback;
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement, intersectionRatio: 0.4 }]);
    tick(directive.delay);
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeFalse();

    // Simulate intersection with more than the threshold
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({ top: 0, bottom: 100, left: 0, right: 100, width: 100, height: 100 }),
    });
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement, intersectionRatio: 0.6 }]);
    tick(directive.delay);
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeTrue();
  }));

  it('should respect the delay input', fakeAsync(() => {
    fixture.componentInstance.delay = 200;
    fixture.detectChanges();

    // Simulate intersection
    Object.defineProperty(element.nativeElement, 'getBoundingClientRect', {
      value: () => ({ top: 0, bottom: 100, left: 0, right: 100, width: 100, height: 100 }),
    });
    const intersectionObserverCallback = (directive as any).observer.callback;
    intersectionObserverCallback([{ isIntersecting: true, target: element.nativeElement }]);
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeFalse();

    tick(200); // Wait for the delay
    fixture.detectChanges();
    expect(element.nativeElement.classList.contains('active')).toBeTrue();
  }));
});