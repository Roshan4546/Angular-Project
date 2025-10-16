import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router: Router) { }
  services = [
    { title: 'Cardiology', text: 'Heart specialists for all ages.', icon: 'bi bi-heart', link: '/cardiology' },
    { title: 'Neurology', text: 'Brain and nervous system care.', icon: 'bi bi-brain', link: '/neurology' },
    { title: 'Orthopedics', text: 'Bone and joint care.', icon: 'bi bi-bandaid', link: '/orthopedics' },
    { title: 'Dentistry', text: 'Oral care & hygiene.', icon: 'bi bi-journal-medical', link: '/dentistry' },
    { title: 'Pediatrics', text: 'Caring for your little ones.', icon: 'bi bi-people', link: '/pediatrics' },
    { title: 'Oncology', text: 'Cancer treatment & support.', icon: 'bi bi-ribbon', link: '/oncology' },
    { title: 'Dermatology', text: 'Skin & hair care.', icon: 'bi bi-droplet', link: '/dermatology' },
    { title: 'Emergency', text: '24/7 emergency services.', icon: 'bi bi-ambulance', link: '/emergency' },
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
    { title: 'Laboratory Services', text: 'Blood tests, pathology & diagnostics.', icon: 'bi bi-flask', link: '/laboratory' },
  ];
  onRoleSelect(event: any) {
    const path = event.target.value;
    if (path)
    {
      this.router.navigateByUrl(path);
    }
  }
}
