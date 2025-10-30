import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patientlogin } from './patientlogin';

describe('Patientlogin', () => {
  let component: Patientlogin;
  let fixture: ComponentFixture<Patientlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Patientlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patientlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
