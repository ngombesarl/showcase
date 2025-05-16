import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirhNgombeComponent } from './sirh-ngombe.component';

describe('SirhNgombeComponent', () => {
  let component: SirhNgombeComponent;
  let fixture: ComponentFixture<SirhNgombeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SirhNgombeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirhNgombeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
