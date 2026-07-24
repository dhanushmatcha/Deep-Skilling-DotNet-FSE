import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  hasUnsavedChanges(): boolean | Observable<boolean>;
}

export const pendingChangesGuard: CanDeactivateFn<ComponentCanDeactivate> = (component) => {
  if (component && component.hasUnsavedChanges && component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Leave?');
  }
  return true;
};
