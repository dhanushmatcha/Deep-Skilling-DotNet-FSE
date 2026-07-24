import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.state';

export const selectEnrollmentFeature = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
  selectEnrollmentFeature,
  (state: EnrollmentState) => state ? state.enrolledIds : []
);

export const selectIsCourseEnrolled = (courseId: number) => createSelector(
  selectEnrolledIds,
  (ids) => ids.includes(courseId)
);
