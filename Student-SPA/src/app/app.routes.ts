import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { StudentComponent } from './student/student';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent }
];
