import { createReducer, on } from '@ngrx/store';
import { initialEnrollmentState } from './enrollment.state';
import { EnrollmentActions } from './enrollment.actions';

export const enrollmentReducer = createReducer(
  initialEnrollmentState,

  on(EnrollmentActions.enrollCourse, (state, { courseId }) => ({
    ...state,
    enrolledIds: state.enrolledIds.includes(courseId) ? state.enrolledIds : [...state.enrolledIds, courseId]
  })),

  on(EnrollmentActions.unenrollCourse, (state, { courseId }) => ({
    ...state,
    enrolledIds: state.enrolledIds.filter(id => id !== courseId)
  })),

  on(EnrollmentActions.toggleEnrollment, (state, { courseId }) => {
    const isEnrolled = state.enrolledIds.includes(courseId);
    return {
      ...state,
      enrolledIds: isEnrolled
        ? state.enrolledIds.filter(id => id !== courseId)
        : [...state.enrolledIds, courseId]
    };
  })
);
