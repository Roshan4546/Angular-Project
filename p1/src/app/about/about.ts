import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: false,
    templateUrl: './about.html',
    styleUrl: './about.css'
})
export class About {
    hospitalName = "City Care Hospital";
    establishedYear = 2002;
    teamSize = 120;
    coreValues = ['Compassion', 'Integrity', 'Excellence', 'Innovation'];

    hospitalImage = 'E:\project\frontEnd\Hospital_Management\src\app\assets\HospitalPic.png';

    get yearsOfService(): number {
        return new Date().getFullYear() - this.establishedYear;
    }
}