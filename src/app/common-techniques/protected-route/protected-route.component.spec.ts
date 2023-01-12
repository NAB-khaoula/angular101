import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedRouteComponent } from './protected-route.component';

describe('ProtectedRouteComponent', () => {
  let component: ProtectedRouteComponent;
  let fixture: ComponentFixture<ProtectedRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
