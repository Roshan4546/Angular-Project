import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class Blog {
  blogPosts = [
    
    {
      category: 'Health Tips',
      title: '10 Simple Health Habits for a Better Life',
      date: new Date('2025-04-10'),
      summary: 'Learn daily habits to boost immunity, energy, and mental well-being.',
      image: 'https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      link: '/blog/health-tips'
    },
    // 2
    {
      category: 'Department Insights',
      title: 'How Neurology is Advancing with Modern Technology',
      date: new Date('2025-04-18'),
      summary: 'Discover how AI and robotics are transforming neurological care.',
      image: 'https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
      link: '/blog/neurology'
    },
    // 3
    {
      category: 'News',
      title: 'City Care Hospital Opens New Cancer Center',
      date: new Date('2025-05-01'),
      summary: 'Our oncology department now offers advanced radiation therapy.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
      link: '/blog/news'
    },
    // 4
    {
      category: 'Doctor Talks',
      title: 'Dr. Tabish on the Importance of Preventive Medicine',
      date: new Date('2025-05-15'),
      summary: 'Preventive medicine saves lives — hear from our expert physician.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      link: '/blog/doctor-talk'
    },
    // 5
    {
      category: 'Patient Stories',
      title: 'A Journey to Recovery: How Early Detection Saved My Life',
      date: new Date('2025-06-05'),
      summary: 'Patient Neha shares her experience battling cancer with our oncology team.',
      image: 'https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=2048x2048&w=is&k=20&c=dM3KXMLR8kIKBjitOQJWSyT8n3WQnI5OlX2Wokh4X2I=',
      link: '/blog/patient-story'
    },
    // 6
    {
      category: 'Events',
      title: 'Join Our Free Health Checkup Camp This Weekend',
      date: new Date('2025-06-15'),
      summary: 'Get your blood pressure, sugar, and BMI checked at no cost.',
      image: 'https://media.istockphoto.com/id/521502212/photo/doctor-holding-heart.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mp265jKYVa9D_1VXis-3gMMOUrd5Xxr0AOQ031zroBQ=',
      link: '/blog/event'
    },
    // 7
    {
      category: 'Health Tips',
      title: 'The Importance of Staying Hydrated in Summer',
      date: new Date('2025-06-25'),
      summary: 'Dehydration can cause fatigue and dizziness — here’s how to prevent it.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      link: '/blog/hydration'
    },
    {
      category: 'Department Insights',
      title: 'Rehabilitation Therapy: Healing Beyond Medicine',
      date: new Date('2025-09-30'),
      summary: 'Physical therapy plays a vital role in patient recovery and independence.',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1540',
      link: '/blog/rehab'
    },
    // 16
    {
      category: 'Events',
      title: 'Blood Donation Drive: Every Drop Counts',
      date: new Date('2025-10-05'),
      summary: 'Join our life-saving event and become someone’s hero today.',
      image: 'https://plus.unsplash.com/premium_photo-1682309740788-04a5451ee019?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      link: '/blog/blood-donation'
    }
  ];
}
