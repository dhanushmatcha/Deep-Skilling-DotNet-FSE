import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.interface';

describe('CourseService (HTTP Testing)', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 101, name: 'Angular Architecture', code: 'CS-ANG20', credits: 4, gradeStatus: 'passed' },
    { id: 102, name: 'TypeScript Advanced', code: 'CS-TS401', credits: 3, gradeStatus: 'failed' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Task: Verify no outstanding HTTP requests after each test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should issue GET request and return successful response', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Angular Architecture');
    });

    // Task: Correct endpoint usage
    const req = httpMock.expectOne('https://api.example.com/courses');
    expect(req.request.method).toBe('GET');

    // Flush mock data response
    req.flush(mockCourses);
  });

  it('should handle HTTP error gracefully and return fallback courses', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBeGreaterThan(0);
    });

    // Flush initial request
    const req1 = httpMock.expectOne('https://api.example.com/courses');
    req1.flush('500 Server Error', { status: 500, statusText: 'Server Error' });

    // Flush retry request
    const req2 = httpMock.expectOne('https://api.example.com/courses');
    req2.flush('500 Server Error', { status: 500, statusText: 'Server Error' });
  });
});
