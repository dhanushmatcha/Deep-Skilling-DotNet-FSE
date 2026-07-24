import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CourseActions } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidgetComponent {
  totalCourses$: Observable<number>;

  constructor(private store: Store) {
    this.totalCourses$ = this.store.select(selectAllCourses).pipe(
      map(courses => courses.length)
    );
  }

  addNewCourse(): void {
    this.store.select(selectAllCourses).pipe(take(1)).subscribe(courses => {
      const nextId = 100 + courses.length + 1;
      this.store.dispatch(CourseActions.addCourse({
        course: {
          id: nextId,
          name: `New Angular Track ${nextId}`,
          code: `CS-NEW${nextId}`,
          credits: 3,
          gradeStatus: 'pending',
          fee: 299.99,
          createdDate: new Date()
        }
      }));
    });
  }
}
