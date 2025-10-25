import { Component, OnInit } from '@angular/core';

interface Doctor {
    id: number;
    name: string;
    specialization: string;
    experience: number;
    image: string;
    description: string;
}

@Component({
    selector: 'app-docters',
    standalone: false,
    templateUrl: './docters.html',
    styleUrl: './docters.css'
})
export class Docters implements OnInit {
    doctors: Doctor[] = [];
    ngOnInit(): void {
        this.doctors = [
            {
                id: 1,
                name: 'Dr. Rajesh Kumar',
                specialization: 'Cardiology',
                experience: 12,
                image: 'https://plus.unsplash.com/premium_photo-1661745996675-24e3fead19c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
                description: 'Expert in advanced heart care and cardiac surgeries.'
            },
            {
                id: 2,
                name: 'Dr. Meena Sharma',
                specialization: 'Neurology',
                experience: 9,
                image: 'https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=mI-MPGA_bHBLK9D77v8shYOZdI7Pqnlh2_xJE00tUHM=',
                description: 'Specializes in neurological disorders and stroke management.'
            },
            {
                id: 3,
                name: 'Dr. Aamir Khan',
                specialization: 'Orthopedics',
                experience: 10,
                image: 'https://media.istockphoto.com/id/1342708859/photo/portrait-of-a-male-doctor.webp?a=1&b=1&s=612x612&w=0&k=20&c=aGcJD7YXbTKk-UPvemxZQ5EWQGDfuXrIv-7HvAsewLQ=',
                description: 'Focused on joint replacement and sports injury treatments.'
            },
            {
                id: 4,
                name: 'Dr. Rina Patel',
                specialization: 'Pediatrics',
                experience: 8,
                image: 'https://media.istockphoto.com/id/1394769128/photo/nurse-with-medical-file-at-hospital.jpg?s=612x612&w=0&k=20&c=kmgF0KSnG0p2OylR4s8lrOPqyo8d0CUzNDGNliYBYsg=',
                description: 'Providing compassionate care for infants and children.'
            },
            {
                id: 5,
                name: 'Dr. Vikram Joshi',
                specialization: 'Dermatology',
                experience: 6,
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
                description: 'Specialist in skincare, laser treatments, and allergies.'
            }
        ];
    }
}