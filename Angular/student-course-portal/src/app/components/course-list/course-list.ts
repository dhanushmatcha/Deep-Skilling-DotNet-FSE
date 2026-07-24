import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseSummaryWidgetComponent } from '../course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../notification/notification';
import { Course } from '../../models/course.interface';
import { CourseActions } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CourseCardComponent, CourseSummaryWidgetComponent, NotificationComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  selectedCourseId: number | null = null;
  searchTerm: string = '';

  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.courses$ = this.store.select(selectAllCourses).pipe(
      map(courses => {
        if (!this.searchTerm) return courses;
        const term = this.searchTerm.toLowerCase();
        return courses.filter(c => c.name.toLowerCase().includes(term) || c.code.toLowerCase().includes(term));
      })
    );
  }

  ngOnInit(): void {
    // Task: Dispatch Load Courses action during initialization
    this.store.dispatch(CourseActions.loadCourses());

    const searchParam = this.route.snapshot.queryParams['search'];
    if (searchParam) {
      this.searchTerm = searchParam;
    }
  }

  onSearchChange(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log(`Enrolling in course: ${courseId}`);
    this.selectedCourseId = courseId;
  }
}
