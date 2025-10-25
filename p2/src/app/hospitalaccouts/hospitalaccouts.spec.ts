import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hospitalaccouts } from './hospitalaccouts';

describe('Hospitalaccouts', () => {
  let component: Hospitalaccouts;
  let fixture: ComponentFixture<Hospitalaccouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hospitalaccouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hospitalaccouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
