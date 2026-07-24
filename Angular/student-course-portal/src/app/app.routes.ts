import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { CourseListComponent } from './components/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { NotFoundComponent } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Task 3: Nested routing under /courses layout
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      // Task 1: Dynamic route parameter :id
      { path: ':id', component: CourseDetailComponent }
    ]
  },

  // Task 4 & 5: Lazy loaded Enrollment module protected by authGuard
  {
    path: 'enroll',
    loadChildren: () => import('./pages/enrollment-form/enrollment.routes').then(m => m.ENROLLMENT_ROUTES),
    canActivate: [authGuard]
  },

  // Task 5: Protected Student Profile route
  {
    path: 'profile',
    component: StudentProfileComponent,
    canActivate: [authGuard]
  },

  // Task 1: Wildcard 404 Not Found route
  { path: '**', component: NotFoundComponent }
];
