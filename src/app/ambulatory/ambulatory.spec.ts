import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambulatory } from './ambulatory';

describe('Ambulatory', () => {
  let component: Ambulatory;
  let fixture: ComponentFixture<Ambulatory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ambulatory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ambulatory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
