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
  
}