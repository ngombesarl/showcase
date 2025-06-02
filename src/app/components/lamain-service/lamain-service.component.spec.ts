import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamainServiceComponent } from './lamain-service.component';

describe('LamainServiceComponent', () => {
  let component: LamainServiceComponent;
  let fixture: ComponentFixture<LamainServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LamainServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LamainServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
