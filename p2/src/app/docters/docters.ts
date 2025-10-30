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

        ];
    }
}