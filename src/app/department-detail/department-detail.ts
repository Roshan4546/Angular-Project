import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  standalone: false,
  templateUrl: './department-detail.html',
  styleUrls: ['./department-detail.css']
})
export class DepartmentDetail {
  
  departmentName: string = '';
  department: any;

  departments = [
    // 1️⃣ Cardiology
    {
      title: 'Cardiology',
      desc: 'Specialized in heart and vascular care.',
      img: 'https://media.istockphoto.com/id/2223338895/photo/heart-attack-and-heart-disease-ecg-background-3d-illustration.jpg',
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

    // 2️⃣ Neurology
    {
      title: 'Neurology',
      desc: 'Advanced brain and nervous system care.',
      img: 'https://media.istockphoto.com/id/1337428790/photo/central-organ-of-human-nervous-system-brain-anatomy.jpg',
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

    // 3️⃣ Orthopedics
    {
      title: 'Orthopedics',
      desc: 'Comprehensive bone and joint treatments.',
      img: 'https://media.istockphoto.com/id/1460882116/photo/physiotherapy-range-of-motion-assessment.jpg',
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

    // 4️⃣ Oncology
    {
      title: 'Oncology',
      desc: 'Dedicated cancer diagnosis and treatment.',
      img: 'https://media.istockphoto.com/id/1330728771/photo/woman-scientist-in-lab.jpg',
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

    // 5️⃣ Radiology
    {
      title: 'Radiology',
      desc: 'State-of-the-art imaging and diagnostics.',
      img: 'https://media.istockphoto.com/id/1074166486/photo/in-control-room-doctor-and-radiologist-discuss-diagnosis.jpg',
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

    // 6️⃣ Dermatology
    {
      title: 'Dermatology',
      desc: 'Expert skincare and dermatological solutions.',
      img: 'https://media.istockphoto.com/id/1266812460/photo/doctor-dermatologist-examines-skin-of-patient.jpg',
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

    // 7️⃣ Emergency
    {
      title: 'Emergency',
      desc: '24/7 trauma and critical care.',
      img: 'https://media.istockphoto.com/id/1477883333/photo/blue-flash-light-of-police-car-against-red-fire-truck.jpg',
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

    // 8️⃣ Laboratory Services
    {
      title: 'Laboratory Services',
      desc: 'Comprehensive pathology and testing facilities.',
      img: 'https://media.istockphoto.com/id/2134367155/photo/scientist-analyze-biochemical-samples.jpg',
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

    // 9️⃣ Pediatrics
    {
      title: 'Pediatrics',
      desc: 'Care for infants, children, and adolescents.',
      img: 'https://media.istockphoto.com/id/1443822627/photo/mother-with-her-cute-baby-visiting-pediatrician-in-clinic.jpg',
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

    // 🔟 Dentistry
    {
      title: 'Dentistry',
      desc: 'Complete oral health and dental care.',
      img: 'https://media.istockphoto.com/id/1485043284/photo/dentistry-concept.jpg',
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

    // 11️⃣ Urology
    {
      title: 'Urology',
      desc: 'Kidney and urinary system specialists.',
      img: 'https://media.istockphoto.com/id/1397381715/photo/unrecognizable-female-doctor-holding-graphic-virtual-visualization-model-of-bladder.jpg',
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

    // 12️⃣ Gastroenterology
    {
      title: 'Gastroenterology',
      desc: 'Digestive system and liver care.',
      img: 'https://media.istockphoto.com/id/1397373541/photo/unrecognizable-female-doctor-holding-stomach-organ.jpg',
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

    // 13️⃣ Ophthalmology
    {
      title: 'Ophthalmology',
      desc: 'Eye care, vision testing, and correction.',
      img: 'https://media.istockphoto.com/id/1351966185/photo/boy-doing-eye-test-checking-examination-with-optometrist.jpg',
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

    // 14️⃣ ENT
    {
      title: 'ENT (Ear, Nose, Throat)',
      desc: 'Comprehensive ENT diagnosis and treatment.',
      img: 'https://media.istockphoto.com/id/1298086611/photo/nasal-and-oral-cavity-anatomical-model.jpg',
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

    // 15️⃣ Psychiatry
    {
      title: 'Psychiatry',
      desc: 'Mental health, counseling, and therapy.',
      img: 'https://media.istockphoto.com/id/1625851354/photo/man-hands-and-listening-for-therapy-sofa-or-advice.jpg',
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

    // 16️⃣ Physiotherapy
    {
      title: 'Physiotherapy',
      desc: 'Physical rehabilitation and pain management.',
      img: 'https://media.istockphoto.com/id/1501185765/photo/man-doing-physical-therapy-and-walking-on-bars.jpg',
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

    // 17️⃣ Nephrology
    {
      title: 'Nephrology',
      desc: 'Kidney disease and dialysis treatments.',
      img: 'https://media.istockphoto.com/id/1410460547/photo/doctor-check-and-diagnose-the-human-kidney.jpg',
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

    // 18️⃣ Pulmonology
    {
      title: 'Pulmonology',
      desc: 'Respiratory and lung care.',
      img: 'https://media.istockphoto.com/id/1309171514/photo/doctor-diagnose-virtual-human-lungs.jpg',
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

    // 19️⃣ Endocrinology
    {
      title: 'Endocrinology',
      desc: 'Hormone and metabolism-related conditions.',
      img: 'https://media.istockphoto.com/id/1397367750/photo/unrecognizable-female-doctor-holding-shield-and-thyroid.jpg',
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

    // 20️⃣ Nutrition & Dietetics
    {
      title: 'Nutrition & Dietetics',
      desc: 'Diet planning and nutritional counseling.',
      img: 'https://media.istockphoto.com/id/1571550869/photo/berries-may-help-you-maintain-or-lose-weight.jpg',
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.departmentName = this.route.snapshot.paramMap.get('name')!;
    this.department = this.departments.find(
      d => d.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-') === this.departmentName
    );
  }

  bookAppointment() {
    this.router.navigate(['/bookappointment'], {
      queryParams: { speciality: this.department.title }
    });
  }
}
