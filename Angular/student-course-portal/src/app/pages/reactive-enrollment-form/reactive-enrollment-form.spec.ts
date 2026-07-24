import { TestBed } from '@angular/core/testing';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form';

describe('ReactiveEnrollmentFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEnrollmentFormComponent]
    }).compileComponents();
  });

  it('should create ReactiveEnrollmentFormComponent', () => {
    const fixture = TestBed.createComponent(ReactiveEnrollmentFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
