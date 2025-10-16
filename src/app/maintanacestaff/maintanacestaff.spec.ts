import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintanacestaff } from './maintanacestaff';

describe('Maintanacestaff', () => {
  let component: Maintanacestaff;
  let fixture: ComponentFixture<Maintanacestaff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Maintanacestaff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maintanacestaff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
