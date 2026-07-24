import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseSummaryWidgetComponent } from './course-summary-widget';
import { selectAllCourses } from '../../store/course/course.selectors';

describe('CourseSummaryWidgetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSummaryWidgetComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({
          selectors: [
            { selector: selectAllCourses, value: [] }
          ]
        })
      ]
    }).compileComponents();
  });

  it('should create CourseSummaryWidgetComponent', () => {
    const fixture = TestBed.createComponent(CourseSummaryWidgetComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
