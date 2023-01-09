import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTechniquesComponent } from './common-techniques.component';

describe('CommonTechniquesComponent', () => {
  let component: CommonTechniquesComponent;
  let fixture: ComponentFixture<CommonTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
