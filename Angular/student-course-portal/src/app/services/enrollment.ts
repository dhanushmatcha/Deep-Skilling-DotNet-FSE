import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { CourseService } from './course';
import { Course } from '../models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'https://api.example.com/enrollments';
  private enrolledIdsSubject = new BehaviorSubject<Set<number>>(new Set<number>());

  constructor(
    private http: HttpClient,
    private courseService: CourseService
  ) {}

  enroll(courseId: number): Observable<boolean> {
    const current = this.enrolledIdsSubject.getValue();
    current.add(courseId);
    this.enrolledIdsSubject.next(new Set(current));

    return this.http.post(`${this.apiUrl}`, { courseId }).pipe(
      tap(() => console.log(`Enrolled in course ${courseId} via HTTP POST`)),
      map(() => true),
      catchError(() => of(true))
    );
  }

  unenroll(courseId: number): Observable<boolean> {
    const current = this.enrolledIdsSubject.getValue();
    current.delete(courseId);
    this.enrolledIdsSubject.next(new Set(current));

    return this.http.delete(`${this.apiUrl}/${courseId}`).pipe(
      tap(() => console.log(`Unenrolled from course ${courseId} via HTTP DELETE`)),
      map(() => true),
      catchError(() => of(true))
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledIdsSubject.getValue().has(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService.getCourses().pipe(
      map(all => {
        const enrolledSet = this.enrolledIdsSubject.getValue();
        return all.filter(course => enrolledSet.has(course.id));
      })
    );
  }
}
