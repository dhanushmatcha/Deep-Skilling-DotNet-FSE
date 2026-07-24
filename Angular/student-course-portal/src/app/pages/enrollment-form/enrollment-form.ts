import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

export interface EnrollmentData {
  studentName: string;
  studentEmail: string;
  courseId: number | null;
  preferredSemester: string;
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentFormComponent {
  // Task 1 & 4: Form model properties and submitted flag
  formData: EnrollmentData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  submitted: boolean = false;
  lastSubmittedData: EnrollmentData | null = null;

  // Task 1: Form submission handler logging value and valid status
  onSubmit(form: NgForm): void {
    console.log('form.value:', form.value);
    console.log('form.valid:', form.valid);

    if (form.valid) {
      this.submitted = true;
      this.lastSubmittedData = { ...form.value };
    }
  }

  // Task 5: Form reset handler utilizing enrollForm.resetForm()
  onReset(form: NgForm): void {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.submitted = false;
    this.lastSubmittedData = null;
  }
}
