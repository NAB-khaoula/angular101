import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVacationComponent } from './about-vacation.component';

describe('AboutVacationComponent', () => {
  let component: AboutVacationComponent;
  let fixture: ComponentFixture<AboutVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVacationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
