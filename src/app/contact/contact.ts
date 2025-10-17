import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {


  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    console.log('Form Submitted:', this.contactForm.value);
    alert('Thank you for contacting City Care Hospital. We will reach out soon.');
    this.contactForm.reset();
    this.submitted = false;
  }


}
