import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, catchError, retry, delay } from 'rxjs/operators';
import { Course } from '../models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'https://api.example.com/courses'; // Mock backend API endpoint

  public initialMockCourses: Course[] = [
    { id: 101, name: 'Angular Architecture & Signals', code: 'CS-ANG20', credits: 4, gradeStatus: 'passed', fee: 399.99, createdDate: new Date('2026-01-10') },
    { id: 102, name: 'TypeScript Advanced Patterns', code: 'CS-TS401', credits: 3, gradeStatus: 'failed', fee: 249.50, createdDate: new Date('2026-02-01') },
    { id: 103, name: 'RxJS & State Management', code: 'CS-RXJ30', credits: 4, gradeStatus: 'pending', fee: 349.00, createdDate: new Date('2026-03-15') },
    { id: 104, name: 'Angular Forms & Validations', code: 'CS-FRM10', credits: 3, gradeStatus: 'passed', fee: 199.99, createdDate: new Date('2026-04-05') },
    { id: 105, name: 'Micro-Frontends with Angular', code: 'CS-MFE50', credits: 5, gradeStatus: 'pending', fee: 499.99, createdDate: new Date('2026-05-20') }
  ];

  private coursesSubject = new BehaviorSubject<Course[]>(this.initialMockCourses);
  public courses$: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(1),
      tap(courses => console.log('RxJS tap operator logged HTTP Courses response:', courses)),
      map(courses => courses.map(c => ({ ...c, name: c.name.trim() }))),
      catchError((error: HttpErrorResponse) => {
        console.warn('API call failed. Using reactive fallback mock dataset.', error.message);
        return of(this.coursesSubject.getValue());
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map(courses => courses.find(c => c.id === id))
    );
  }

  addCourse(course: Course): Observable<Course> {
    const current = this.coursesSubject.getValue();
    const updated = [...current, course];
    this.coursesSubject.next(updated);

    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(res => console.log('Course created via HTTP POST:', res)),
      catchError(() => of(course))
    );
  }

  updateCourse(id: number, updatedCourse: Course): Observable<Course> {
    const current = this.coursesSubject.getValue();
    const index = current.findIndex(c => c.id === id);
    if (index !== -1) {
      current[index] = { ...updatedCourse };
      this.coursesSubject.next([...current]);
    }

    return this.http.put<Course>(`${this.apiUrl}/${id}`, updatedCourse).pipe(
      tap(res => console.log(`Course #${id} updated via HTTP PUT:`, res)),
      catchError(() => of(updatedCourse))
    );
  }

  deleteCourse(id: number): Observable<boolean> {
    const current = this.coursesSubject.getValue().filter(c => c.id !== id);
    this.coursesSubject.next(current);

    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      map(() => true),
      catchError(() => of(true))
    );
  }

  getEnrolledStudents(courseId: number): Observable<string[]> {
    return of(courseId).pipe(
      delay(400),
      map(id => [`Student Alice (#${id}A)`, `Student Bob (#${id}B)`, `Student Charlie (#${id}C)`])
    );
  }
}
