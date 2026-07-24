import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, UpperCasePipe, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.interface';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentActions } from '../../store/enrollment/enrollment.actions';
import { selectIsCourseEnrolled } from '../../store/enrollment/enrollment.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  isEnrolled$: Observable<boolean> | null = null;
  currentEnrolledState: boolean = false;

  constructor(private store: Store) {}

  get isEnrolled(): boolean {
    return this.currentEnrolledState;
  }

  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.currentEnrolledState,
      'card--full': !!(this.course?.credits && this.course.credits >= 4),
      'expanded': this.isExpanded
    };
  }

  get borderStyle(): { [key: string]: string } {
    let color = '#64748b';
    if (this.course?.gradeStatus === 'passed') {
      color = '#10b981';
    } else if (this.course?.gradeStatus === 'failed') {
      color = '#ef4444';
    }
    return {
      'border-left': `6px solid ${color}`
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course'] && this.course) {
      this.isEnrolled$ = this.store.select(selectIsCourseEnrolled(this.course.id));
      this.isEnrolled$.subscribe(val => this.currentEnrolledState = val);

      console.log('CourseCard ngOnChanges logs:', {
        previousValue: changes['course'].previousValue,
        currentValue: changes['course'].currentValue
      });
    }
  }

  onToggleEnrollment(): void {
    if (!this.course) return;

    // Dispatch NgRx EnrollmentAction
    this.store.dispatch(EnrollmentActions.toggleEnrollment({ courseId: this.course.id }));
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }
}
