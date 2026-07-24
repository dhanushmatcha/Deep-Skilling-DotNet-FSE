import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseDetailComponent } from './course-detail';
import { selectAllCourses } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

describe('CourseDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({
          selectors: [
            { selector: selectAllCourses, value: [] },
            { selector: selectEnrolledIds, value: [] }
          ]
        })
      ]
    }).compileComponents();
  });

  it('should create CourseDetailComponent', () => {
    const fixture = TestBed.createComponent(CourseDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
