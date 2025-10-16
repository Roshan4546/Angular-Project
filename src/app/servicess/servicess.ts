import { Component } from '@angular/core';

@Component({
  selector: 'app-servicess',
  standalone: false,
  templateUrl: './servicess.html',
  styleUrl: './servicess.css'
})
export class Servicess {

  services = [
    { title: 'Cardiology', text: 'Heart specialists for all ages.', icon: 'bi bi-heart', link: '/cardiology' },
    { title: 'Neurology', text: 'Brain and nervous system care.', icon: 'bi bi-lightning-charge', link: '/neurology' },
    { title: 'Orthopedics', text: 'Bone and joint care.', icon: 'bi bi-bandaid', link: '/orthopedics' },
    { title: 'Dentistry', text: 'Oral care & hygiene.', icon: 'bi bi-journal-medical', link: '/dentistry' },
    { title: 'Pediatrics', text: 'Caring for your little ones.', icon: 'bi bi-people', link: '/pediatrics' },
    { title: 'Oncology', text: 'Cancer treatment & support.', icon: 'bi bi-shield-plus', link: '/oncology' },
    { title: 'Dermatology', text: 'Skin & hair care.', icon: 'bi bi-droplet', link: '/dermatology' },
    { title: 'Emergency', text: '24/7 emergency services.', icon: 'bi bi-exclamation-triangle', link: '/emergency' },
    { title: 'Radiology', text: 'Advanced imaging & diagnostics.', icon: 'bi bi-camera', link: '/radiology' },
    { title: 'Urology', text: 'Urinary & kidney care.', icon: 'bi bi-droplet-half', link: '/urology' },
    { title: 'Gastroenterology', text: 'Digestive system specialists.', icon: 'bi bi-bucket', link: '/gastroenterology' },
    { title: 'Ophthalmology', text: 'Eye care and vision correction.', icon: 'bi bi-eye', link: '/ophthalmology' },
    { title: 'ENT (Ear, Nose, Throat)', text: 'Specialized ENT treatments.', icon: 'bi bi-ear', link: '/ent' },
    { title: 'Psychiatry', text: 'Mental health and counseling.', icon: 'bi bi-heart-pulse', link: '/psychiatry' },
    { title: 'Physiotherapy', text: 'Rehabilitation and movement therapy.', icon: 'bi bi-person-walking', link: '/physiotherapy' },
    { title: 'Nephrology', text: 'Kidney care and dialysis.', icon: 'bi bi-droplet-fill', link: '/nephrology' },
    { title: 'Pulmonology', text: 'Lungs and respiratory system care.', icon: 'bi bi-lungs', link: '/pulmonology' },
    { title: 'Endocrinology', text: 'Hormone and metabolic disorders.', icon: 'bi bi-flower1', link: '/endocrinology' },
    { title: 'Rheumatology', text: 'Joint and autoimmune care.', icon: 'bi bi-gem', link: '/rheumatology' },
    { title: 'Plastic Surgery', text: 'Cosmetic and reconstructive procedures.', icon: 'bi bi-scissors', link: '/plasticsurgery' },
    { title: 'Nutrition & Dietetics', text: 'Healthy eating & weight management.', icon: 'bi bi-egg-fried', link: '/nutrition' },
    { title: 'Vaccination Center', text: 'Routine & travel vaccinations.', icon: 'bi bi-shield-plus', link: '/vaccination' },
    {
      title: 'Laboratory Services',
      text: 'Blood tests, pathology & diagnostics.',
      icon: 'bi bi-droplet',
      link: '/laboratory'
    }
    ,
  ];

  reviews = [
    { name: 'John Doe', designation: 'Patient', text: 'Excellent care and friendly staff.' },
    { name: 'Jane Smith', designation: 'Patient', text: 'Highly professional and compassionate doctors.' },
    { name: 'Mark Wilson', designation: 'Patient', text: 'State-of-the-art facilities and great service.' },
  ];

  ngAfterViewInit() {
    // Fade-in animation for cards
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
