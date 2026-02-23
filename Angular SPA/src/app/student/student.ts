import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Student {
  name: string;
  department: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],   
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  inputName: string = '';
  inputDept: string = '';


  students: Student[] = [];

  constructor(private router: Router) {}


  submit() {
    if (this.inputName && this.inputDept) {
      this.students.push({
        name: this.inputName,
        department: this.inputDept
      });

     
      this.inputName = '';
      this.inputDept = '';
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
