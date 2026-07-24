import { Component, OnInit } from '@angular/core';
import { CommonModule, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.interface';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { selectCourseById } from '../../store/course/course.selectors';
import { selectIsCourseEnrolled } from '../../store/enrollment/enrollment.selectors';
import { EnrollmentActions } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, UpperCasePipe, CurrencyPipe, DatePipe, CreditLabelPipe],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetailComponent implements OnInit {
  courseId: number | null = null;
  course: Course | undefined;
  isEnrolled: boolean = false;

  enrolledStudents$!: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.courseId = Number(idParam);
      this.store.select(selectCourseById(this.courseId)).subscribe(c => {
        this.course = c;
      });
      this.store.select(selectIsCourseEnrolled(this.courseId)).subscribe(val => {
        this.isEnrolled = val;
      });
    }

    this.enrolledStudents$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id') || 0);
        return this.courseService.getEnrolledStudents(id);
      })
    );
  }

  toggleEnrollment(): void {
    if (!this.courseId) return;
    this.store.dispatch(EnrollmentActions.toggleEnrollment({ courseId: this.courseId }));
  }
}
