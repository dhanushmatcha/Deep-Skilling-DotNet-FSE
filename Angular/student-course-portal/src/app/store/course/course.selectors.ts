import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.state';

export const selectCourseFeature = createFeatureSelector<CourseState>('courses');

export const selectAllCourses = createSelector(
  selectCourseFeature,
  (state: CourseState) => state ? state.courses : []
);

export const selectCoursesLoading = createSelector(
  selectCourseFeature,
  (state: CourseState) => state ? state.loading : false
);

export const selectCoursesError = createSelector(
  selectCourseFeature,
  (state: CourseState) => state ? state.error : null
);

export const selectCourseById = (id: number) => createSelector(
  selectAllCourses,
  (courses) => courses.find(c => c.id === id)
);
