import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ComponentCanDeactivate } from '../../guards/pending-changes-guard';

export function noXXCourseValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '').trim();
  if (value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

export function asyncEmailValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }
    return of(control.value).pipe(
      delay(800),
      map(emailVal => {
        if (typeof emailVal === 'string' && emailVal.toLowerCase().includes('test@')) {
          return { emailTaken: true };
        }
        return null;
      })
    );
  };
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit, ComponentCanDeactivate {
  enrollForm!: FormGroup;
  submitted: boolean = false;
  lastSubmittedValues: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [asyncEmailValidator()]],
      courseId: ['', [Validators.required, noXXCourseValidator]],
      preferredSemester: ['Odd'],
      agreeToTerms: [false, [Validators.requiredTrue]],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Task 6: CanDeactivate check method for unsaved form changes
  hasUnsavedChanges(): boolean {
    return this.enrollForm ? (this.enrollForm.dirty && !this.submitted) : false;
  }

  onSubmit(): void {
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
      this.lastSubmittedValues = this.enrollForm.getRawValue();
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
    this.lastSubmittedValues = null;
  }
}
