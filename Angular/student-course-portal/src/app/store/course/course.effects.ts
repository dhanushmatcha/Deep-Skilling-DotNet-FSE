import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CourseService } from '../../services/course';
import { CourseActions } from './course.actions';

@Injectable()
export class CourseEffects {
  private actions$ = inject(Actions);
  private courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(courses => CourseActions.loadCoursesSuccess({ courses: courses && courses.length > 0 ? courses : this.courseService.initialMockCourses })),
          catchError(() => of(CourseActions.loadCoursesSuccess({ courses: this.courseService.initialMockCourses })))
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.addCourse),
      mergeMap(({ course }) =>
        this.courseService.addCourse(course).pipe(
          map(newCourse => CourseActions.addCourseSuccess({ course: newCourse })),
          catchError(() => of(CourseActions.addCourseSuccess({ course })))
        )
      )
    )
  );

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.updateCourse),
      mergeMap(({ id, course }) =>
        this.courseService.updateCourse(id, course).pipe(
          map(updatedCourse => CourseActions.updateCourseSuccess({ course: updatedCourse })),
          catchError(() => of(CourseActions.updateCourseSuccess({ course })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.deleteCourse),
      mergeMap(({ id }) =>
        this.courseService.deleteCourse(id).pipe(
          map(() => CourseActions.deleteCourseSuccess({ id })),
          catchError(() => of(CourseActions.deleteCourseSuccess({ id })))
        )
      )
    )
  );
}
