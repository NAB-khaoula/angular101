import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPayrollComponent } from './about-payroll.component';

describe('AboutPayrollComponent', () => {
  let component: AboutPayrollComponent;
  let fixture: ComponentFixture<AboutPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
