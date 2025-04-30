import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessIngineeringComponent } from './process-ingineering.component';

describe('ProcessIngineeringComponent', () => {
  let component: ProcessIngineeringComponent;
  let fixture: ComponentFixture<ProcessIngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessIngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessIngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
