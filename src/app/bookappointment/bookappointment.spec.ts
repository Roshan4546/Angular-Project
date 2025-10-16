import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookappointment } from './bookappointment';

describe('Bookappointment', () => {
  let component: Bookappointment;
  let fixture: ComponentFixture<Bookappointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bookappointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookappointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
