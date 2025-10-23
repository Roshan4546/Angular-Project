import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-readmore',
  standalone: true,  // ✅ ensure standalone is true
  imports: [CommonModule, RouterModule], // ✅ add this line
  templateUrl: './readmore.html',
  styleUrls: ['./readmore.css']
})
export class Readmore implements OnInit {

  title: string = '';
  selectedDept: any;

  // all your departments data (same as your existing array)
  readmores = [
    {
      title: 'Cardiology',
      desc: 'Specialized in heart and vascular care.',
      img: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg',
      about: 'Our Cardiology department focuses on diagnosing, treating, and preventing heart diseases using advanced medical technology and expert cardiologists.',
      doctors: [
        { name: 'Dr. Rajesh Nair', degree: 'MD, DM (Cardiology)', exp: '15 years' },
        { name: 'Dr. Meena Sharma', degree: 'MBBS, MD (Medicine)', exp: '10 years' }
      ],
      steps: [
        'Patient evaluation and ECG analysis',
        'Echocardiogram and stress test',
        'Diagnosis and treatment plan',
        'Angioplasty or bypass if needed',
        'Rehabilitation and lifestyle guidance'
      ],
      machines: ['ECG Machine', 'Echocardiography System', 'Cardiac Catheterization Lab', 'Holter Monitor']
    },
    {
      title: 'Neurology',
      desc: 'Advanced brain and nervous system care.',
      img: 'https://images.pexels.com/photos/4226123/pexels-photo-4226123.jpeg',
      about: 'Our Neurology team handles disorders of the brain, spine, and nerves with specialized diagnostics and personalized care.',
      doctors: [
        { name: 'Dr. Kavita Joshi', degree: 'DM (Neurology)', exp: '18 years' },
        { name: 'Dr. Aman Gupta', degree: 'MD, DM (Neurology)', exp: '12 years' }
      ],
      steps: [
        'Neurological examination',
        'MRI or EEG diagnosis',
        'Medication and physiotherapy',
        'Surgery if required',
        'Long-term rehabilitation'
      ],
      machines: ['EEG Machine', 'MRI Scanner', 'CT Scanner', 'Nerve Conduction Equipment']
    },
    {
      title: 'Orthopedics',
      desc: 'Comprehensive bone and joint treatments.',
      img: 'https://images.pexels.com/photos/8376285/pexels-photo-8376285.jpeg',
      about: 'We treat fractures, arthritis, joint replacements, and sports injuries with the latest minimally invasive techniques.',
      doctors: [
        { name: 'Dr. Anil Patil', degree: 'MS (Orthopedics)', exp: '20 years' },
        { name: 'Dr. Sneha Reddy', degree: 'DNB (Ortho)', exp: '9 years' }
      ],
      steps: [
        'X-ray and diagnosis',
        'Pain assessment and treatment plan',
        'Surgery or physiotherapy',
        'Rehabilitation exercises',
        'Follow-up for recovery'
      ],
      machines: ['Digital X-Ray', 'Arthroscopy Unit', 'C-Arm Imaging', 'Bone Density Scanner']
    },
    {
      title: 'Oncology',
      desc: 'Dedicated cancer diagnosis and treatment.',
      img: 'https://images.pexels.com/photos/5910774/pexels-photo-5910774.jpeg',
      about: 'Comprehensive cancer care including chemotherapy, radiation therapy, and immunotherapy under one roof.',
      doctors: [
        { name: 'Dr. Ritu Verma', degree: 'DM (Medical Oncology)', exp: '16 years' },
        { name: 'Dr. Nikhil Rao', degree: 'MD (Radiation Oncology)', exp: '11 years' }
      ],
      steps: [
        'Screening and biopsy',
        'Staging and diagnosis',
        'Treatment (chemo/radiation/surgery)',
        'Supportive therapy',
        'Follow-up and remission care'
      ],
      machines: ['Linear Accelerator', 'PET-CT Scanner', 'Radiation Therapy Units']
    },
    {
      title: 'Radiology',
      desc: 'State-of-the-art imaging and diagnostics.',
      img: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg',
      about: 'Our Radiology department offers advanced imaging services for accurate diagnosis.',
      doctors: [
        { name: 'Dr. Manoj Kumar', degree: 'MD (Radiology)', exp: '14 years' },
        { name: 'Dr. Pooja Iyer', degree: 'DNB (Radiodiagnosis)', exp: '8 years' }
      ],
      steps: [
        'Patient prep and imaging',
        'Interpretation by radiologist',
        'Report generation and consultation'
      ],
      machines: ['MRI Scanner', 'CT Scanner', 'Ultrasound Machine', 'Digital X-Ray']
    },
    {
      title: 'Dermatology',
      desc: 'Expert skincare and dermatological solutions.',
      img: 'https://images.pexels.com/photos/4210660/pexels-photo-4210660.jpeg',
      about: 'Our Dermatology unit offers treatments for acne, eczema, psoriasis, and cosmetic dermatology.',
      doctors: [
        { name: 'Dr. Priya Kapoor', degree: 'MD (Dermatology)', exp: '13 years' },
        { name: 'Dr. Neeraj Mehta', degree: 'MBBS, DDVL', exp: '9 years' }
      ],
      steps: [
        'Skin examination',
        'Diagnosis and lab tests',
        'Medication or laser therapy',
        'Follow-up for improvement'
      ],
      machines: ['Dermatoscope', 'Laser Therapy Unit', 'Cryotherapy Device']
    },
    {
      title: 'Emergency',
      desc: '24/7 trauma and critical care.',
      img: 'https://images.pexels.com/photos/3584101/pexels-photo-3584101.jpeg',
      about: 'Our emergency department handles trauma, cardiac arrest, strokes, and all life-threatening situations.',
      doctors: [
        { name: 'Dr. Suresh Rao', degree: 'MBBS, MD (Emergency Medicine)', exp: '15 years' },
        { name: 'Dr. Tanya Malik', degree: 'MBBS', exp: '8 years' }
      ],
      steps: [
        'Initial triage',
        'Stabilization',
        'Emergency treatment',
        'Monitoring and ICU transfer'
      ],
      machines: ['Defibrillator', 'Ventilator', 'Patient Monitor', 'ECG']
    },
    {
      title: 'Laboratory Services',
      desc: 'Comprehensive pathology and testing facilities.',
      img: 'https://images.pexels.com/photos/6755048/pexels-photo-6755048.jpeg',
      about: 'Equipped with modern analyzers and automated machines for accurate test results.',
      doctors: [
        { name: 'Dr. Nivedita Singh', degree: 'MD (Pathology)', exp: '12 years' }
      ],
      steps: [
        'Sample collection',
        'Testing and analysis',
        'Result verification',
        'Report generation'
      ],
      machines: ['Auto Analyzer', 'Centrifuge', 'Microscope', 'Blood Cell Counter']
    },
    {
      title: 'Pediatrics',
      desc: 'Care for infants, children, and adolescents.',
      img: 'https://images.pexels.com/photos/3992931/pexels-photo-3992931.jpeg',
      about: 'Our pediatricians ensure comprehensive child healthcare including vaccinations, nutrition, and development monitoring.',
      doctors: [
        { name: 'Dr. Smita Jain', degree: 'MD (Pediatrics)', exp: '14 years' }
      ],
      steps: [
        'Health assessment',
        'Vaccination and growth tracking',
        'Nutritional guidance',
        'Treatment of childhood illnesses'
      ],
      machines: ['Infant Incubator', 'Pediatric Ventilator', 'Nebulizer']
    },
    {
      title: 'Dentistry',
      desc: 'Complete oral health and dental care.',
      img: 'https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg',
      about: 'We offer all dental treatments including root canal, implants, and orthodontics.',
      doctors: [
        { name: 'Dr. Neha Varma', degree: 'BDS, MDS', exp: '10 years' }
      ],
      steps: [
        'Oral examination and X-ray',
        'Diagnosis and cleaning',
        'Treatment (filling, extraction, etc.)',
        'Post-procedure care'
      ],
      machines: ['Dental X-Ray', 'Ultrasonic Scaler', 'Autoclave', 'Dental Chair Unit']
    },
    {
      title: 'Urology',
      desc: 'Kidney and urinary system specialists.',
      img: 'https://media.istockphoto.com/id/1457621430/photo/doctor-check-and-diagnose-the-human-kidneys-on-blurred-medical-background-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=R6j8OsMqcAGP_T_ggTbafu63UhZ_hS7amyeBJYvi5Ic=',
      about: 'We treat urinary infections, kidney stones, and bladder issues with modern equipment.',
      doctors: [
        { name: 'Dr. Ravi Bansal', degree: 'MS, MCh (Urology)', exp: '17 years' }
      ],
      steps: [
        'Urine tests and imaging',
        'Diagnosis and treatment',
        'Surgery if needed',
        'Post-care and diet planning'
      ],
      machines: ['Lithotripsy Machine', 'Cystoscope', 'Ultrasound Scanner']
    },
    {
      title: 'Gastroenterology',
      desc: 'Digestive system and liver care.',
      img: 'https://media.istockphoto.com/id/1368577966/photo/doctor-shows-the-liver-and-stomach-in-his-hands-the-concept-of-treatment-of-the-stomach.jpg?b=1&s=612x612&w=0&k=20&c=R8Pfswz7KoTin0UAZ-v8bxcMgCKQ3Z4uNjWTvaEpvZA=',
      about: 'Our experts diagnose and treat digestive and liver disorders with precision.',
      doctors: [
        { name: 'Dr. Arvind Krishnan', degree: 'DM (Gastroenterology)', exp: '15 years' }
      ],
      steps: [
        'Endoscopic evaluation',
        'Lab and imaging diagnosis',
        'Medication and therapy',
        'Lifestyle modification guidance'
      ],
      machines: ['Endoscopy Unit', 'Colonoscope', 'Ultrasound']
    },
    {
      title: 'Ophthalmology',
      desc: 'Eye care, vision testing, and correction.',
      img: 'https://images.pexels.com/photos/6749736/pexels-photo-6749736.jpeg',
      about: 'We provide advanced eye exams, cataract surgery, and laser vision correction.',
      doctors: [
        { name: 'Dr. Leena Joseph', degree: 'MS (Ophthalmology)', exp: '13 years' }
      ],
      steps: [
        'Vision testing',
        'Eye imaging',
        'Surgical correction',
        'Post-op monitoring'
      ],
      machines: ['Phaco Machine', 'OCT Scanner', 'Auto Refractometer']
    },
    {
      title: 'ENT (Ear, Nose, Throat)',
      desc: 'app/Comprehensive ENT diagnosis and treatment.',
      img: 'https://media.istockphoto.com/id/1302254900/photo/diagnosis-and-treatment-of-ent-diseases-nasal-and-oral-cavity-anatomical-model-on-a-table.jpg?b=1&s=612x612&w=0&k=20&c=tulWvXwSWjKOaWg1zM9lBCwRdPzK7qF88NvkJd28xT4=',
      about: 'We handle all ENT conditions including sinus issues, hearing loss, and throat disorders.',
      doctors: [
        { name: 'Dr. Arjun Menon', degree: 'MS (ENT)', exp: '11 years' }
      ],
      steps: [
        'Otoscopy and nasal endoscopy',
        'Diagnosis and medication',
        'Surgery if required',
        'Post-operative care'
      ],
      machines: ['Endoscope', 'Audiometer', 'Microscope']
    },
    {
      title: 'Psychiatry',
      desc: 'Mental health, counseling, and therapy.',
      img: 'https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg',
      about: 'Our psychiatrists provide mental health care, therapy, and counseling for all age groups.',
      doctors: [
        { name: 'Dr. Komal Deshmukh', degree: 'MD (Psychiatry)', exp: '10 years' }
      ],
      steps: [
        'Initial consultation',
        'Therapy and counseling',
        'Medication (if required)',
        'Follow-up sessions'
      ],
      machines: ['EEG', 'Biofeedback Device']
    },
    {
      title: 'Physiotherapy',
      desc: 'Physical rehabilitation and pain management.',
      img: 'https://images.pexels.com/photos/339619/pexels-photo-339619.jpeg',
      about: 'We help patients recover movement, manage pain, and regain strength.',
      doctors: [
        { name: 'Dr. Rohit Agarwal', degree: 'MPT (Ortho)', exp: '9 years' }
      ],
      steps: [
        'Physical assessment',
        'Customized therapy plan',
        'Exercise sessions',
        'Progress tracking'
      ],
      machines: ['TENS Machine', 'Ultrasound Therapy', 'Traction Unit']
    },
    {
      title: 'Nephrology',
      desc: 'Kidney disease and dialysis treatments.',
      img: 'https://media.istockphoto.com/id/1457621430/photo/doctor-check-and-diagnose-the-human-kidneys-on-blurred-medical-background-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=R6j8OsMqcAGP_T_ggTbafu63UhZ_hS7amyeBJYvi5Ic=',
      about: 'Diagnosis and management of kidney diseases and dialysis support.',
      doctors: [
        { name: 'Dr. Kiran Naidu', degree: 'DM (Nephrology)', exp: '14 years' }
      ],
      steps: [
        'Blood and urine analysis',
        'Diagnosis and medication',
        'Dialysis or transplant evaluation',
        'Long-term care'
      ],
      machines: ['Dialysis Machine', 'Ultrasound', 'Blood Analyzer']
    },
    {
      title: 'Pulmonology',
      desc: 'Respiratory and lung care.',
      img: 'https://media.istockphoto.com/id/1337428741/photo/human-respiratory-system-lungs-anatomy.jpg?b=1&s=612x612&w=0&k=20&c=Iuk9DaCmUg1VG6WJKKndFapYJv3DMGN_2SLKSSzvvcQ=',
      about: 'Diagnosis and treatment of lung conditions such as asthma, COPD, and infections.',
      doctors: [
        { name: 'Dr. Poonam Lal', degree: 'MD (Pulmonology)', exp: '12 years' }
      ],
      steps: [
        'Spirometry test',
        'Diagnosis and imaging',
        'Medication and oxygen therapy',
        'Rehabilitation plan'
      ],
      machines: ['Spirometer', 'Ventilator', 'Oxygen Concentrator']
    },
    {
      title: 'Endocrinology',
      desc: 'Hormone and metabolism-related conditions.',
      img: 'https://images.pexels.com/photos/8669957/pexels-photo-8669957.jpeg',
      about: 'Specializes in hormonal disorders such as diabetes, thyroid, and adrenal diseases.',
      doctors: [
        { name: 'Dr. Neelam Bhatt', degree: 'DM (Endocrinology)', exp: '15 years' }
      ],
      steps: [
        'Hormone testing',
        'Diagnosis and counseling',
        'Treatment and monitoring'
      ],
      machines: ['Glucometer', 'Thyroid Function Analyzer']
    },
    {
      title: 'Nutrition & Dietetics',
      desc: 'Diet planning and nutritional counseling.',
      img: 'https://images.pexels.com/photos/6823669/pexels-photo-6823669.jpeg',
      about: 'Personalized diet plans for weight management and disease prevention.',
      doctors: [
        { name: 'Dr. Alka Mishra', degree: 'MSc (Nutrition)', exp: '10 years' }
      ],
      steps: [
        'Nutritional assessment',
        'Diet plan preparation',
        'Progress tracking'
      ],
      machines: ['Body Composition Analyzer', 'Calorimeter']
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title') || '';
    this.selectedDept = this.readmores.find(
      dept => dept.title.toLowerCase() === this.title.toLowerCase()
    );
  }
}

  


