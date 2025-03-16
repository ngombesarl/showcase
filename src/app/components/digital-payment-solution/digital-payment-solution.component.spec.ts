import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPaymentSolutionComponent } from './digital-payment-solution.component';

describe('DigitalPaymentSolutionComponent', () => {
  let component: DigitalPaymentSolutionComponent;
  let fixture: ComponentFixture<DigitalPaymentSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalPaymentSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalPaymentSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
