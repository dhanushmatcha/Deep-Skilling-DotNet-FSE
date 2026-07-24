import { createActionGroup, props } from '@ngrx/store';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment Feature',
  events: {
    'Enroll Course': props<{ courseId: number }>(),
    'Unenroll Course': props<{ courseId: number }>(),
    'Toggle Enrollment': props<{ courseId: number }>()
  }
});
