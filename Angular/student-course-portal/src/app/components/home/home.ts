import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseSummaryWidgetComponent } from '../course-summary-widget/course-summary-widget';
import { Course } from '../../models/course.interface';
import { selectAllCourses, selectCourseById } from '../../store/course/course.selectors';
import { CourseActions } from '../../store/course/course.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent, CourseSummaryWidgetComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName: string = 'Student Course Portal';
  isPortalActive: boolean = true;
  message: string = '';
  searchTerm: string = '';

  totalCourseCount$: Observable<number>;
  featuredCourse$: Observable<Course | undefined>;

  constructor(private store: Store) {
    this.totalCourseCount$ = this.store.select(selectAllCourses).pipe(
      map(courses => courses.length)
    );

    this.featuredCourse$ = this.store.select(selectAllCourses).pipe(
      map(courses => courses[0])
    );
  }

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded from NgRx Store');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  updateFeaturedCourseCredits(): void {
    this.store.select(selectCourseById(101)).pipe(take(1)).subscribe(c => {
      if (c) {
        const updated = { ...c, credits: c.credits + 1 };
        this.store.dispatch(CourseActions.updateCourse({ id: c.id, course: updated }));
      }
    });
  }
}
