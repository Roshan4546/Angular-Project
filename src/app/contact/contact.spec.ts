import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

import { ReactiveFormsModule } from '@angular/forms';
describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contact],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact page', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 3 controls', () => {
    expect(Object.keys(component.contactForm.controls).length).toBe(3);
  });

  it('should mark form as invalid when empty', () => {
    expect(component.contactForm.invalid).toBeTrue();
  });
});
