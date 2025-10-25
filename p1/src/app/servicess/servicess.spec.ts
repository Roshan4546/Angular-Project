import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicess } from './servicess';

describe('Servicess', () => {
  let component: Servicess;
  let fixture: ComponentFixture<Servicess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Servicess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
