import { createSelector } from '@ngrx/store';
import { selectAllCourses } from './course/course.selectors';
import { selectEnrolledIds } from './enrollment/enrollment.selectors';
import { Course } from '../models/course.interface';

export const selectEnrolledCourseObjects = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses: Course[], enrolledIds: number[]) => {
    return courses.filter(course => enrolledIds.includes(course.id));
  }
);
