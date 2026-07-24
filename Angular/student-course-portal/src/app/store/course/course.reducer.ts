import { createReducer, on } from '@ngrx/store';
import { initialCourseState } from './course.state';
import { CourseActions } from './course.actions';

export const courseReducer = createReducer(
  initialCourseState,

  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),

  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(CourseActions.addCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
    error: null
  })),

  on(CourseActions.updateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: state.courses.map(c => c.id === course.id ? course : c),
    error: null
  })),

  on(CourseActions.deleteCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(c => c.id !== id),
    error: null
  }))
);
