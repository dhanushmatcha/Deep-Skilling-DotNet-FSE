import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course.interface';
import { selectEnrolledCourseObjects } from '../../store/cross-feature.selectors';
import { EnrollmentActions } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Task: Consume Cross-Feature Selector combining Course State + Enrollment State
    this.enrolledCourses$ = this.store.select(selectEnrolledCourseObjects);
  }

  onUnenroll(courseId: number): void {
    this.store.dispatch(EnrollmentActions.unenrollCourse({ courseId }));
  }
}
