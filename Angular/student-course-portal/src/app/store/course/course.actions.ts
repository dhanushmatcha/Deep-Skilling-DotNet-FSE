import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course } from '../../models/course.interface';

export const CourseActions = createActionGroup({
  source: 'Course API',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ courses: Course[] }>(),
    'Load Courses Failure': props<{ error: string }>(),

    'Add Course': props<{ course: Course }>(),
    'Add Course Success': props<{ course: Course }>(),
    'Add Course Failure': props<{ error: string }>(),

    'Update Course': props<{ id: number; course: Course }>(),
    'Update Course Success': props<{ course: Course }>(),
    'Update Course Failure': props<{ error: string }>(),

    'Delete Course': props<{ id: number }>(),
    'Delete Course Success': props<{ id: number }>(),
    'Delete Course Failure': props<{ error: string }>()
  }
});
