import { TestBed } from '@angular/core/testing';
import { pendingChangesGuard, ComponentCanDeactivate } from './pending-changes-guard';

describe('pendingChangesGuard', () => {
  it('should allow navigation when component has no unsaved changes', () => {
    const mockComponent: ComponentCanDeactivate = {
      hasUnsavedChanges: () => false
    };
    const result = TestBed.runInInjectionContext(() => pendingChangesGuard(mockComponent, {} as any, {} as any, {} as any));
    expect(result).toBeTrue();
  });
});
