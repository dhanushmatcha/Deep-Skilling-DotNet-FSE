import { Routes } from '@angular/router';
import { EnrollmentFormComponent } from './enrollment-form';
import { ReactiveEnrollmentFormComponent } from '../reactive-enrollment-form/reactive-enrollment-form';
import { pendingChangesGuard } from '../../guards/pending-changes-guard';

export const ENROLLMENT_ROUTES: Routes = [
  { path: '', component: EnrollmentFormComponent },
  {
    path: 'reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [pendingChangesGuard]
  }
];
