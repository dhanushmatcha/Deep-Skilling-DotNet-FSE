import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { CourseListComponent } from './course-list';
import { Course } from '../../models/course.interface';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { CourseActions } from '../../store/course/course.actions';

describe('CourseListComponent (NgRx Connected Component Testing)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCoursesList: Course[] = [
    { id: 101, name: 'Angular Architecture', code: 'CS-ANG20', credits: 4, gradeStatus: 'passed' },
    { id: 102, name: 'TypeScript Masterclass', code: 'CS-TS401', credits: 3, gradeStatus: 'pending' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
          selectors: [
            { selector: selectAllCourses, value: mockCoursesList },
            { selector: selectCoursesLoading, value: false }
          ]
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and dispatch loadCourses on init', () => {
    expect(component).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledWith(CourseActions.loadCourses());
  });

  it('should render course list correctly from MockStore', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-course-card');
    expect(cards.length).toBe(2);
  });

  it('should render loading indicator when selectCoursesLoading emits true', () => {
    selectCoursesLoading.setResult(true);
    store.refreshState();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const loadingText = compiled.querySelector('.loading-text');
    expect(loadingText?.textContent).toContain('Loading courses from NgRx Store...');
  });

  it('should automatically update UI when Store state updates', () => {
    const updatedMockList: Course[] = [
      ...mockCoursesList,
      { id: 103, name: 'RxJS Deep Dive', code: 'CS-RXJ30', credits: 4, gradeStatus: 'passed' }
    ];

    selectAllCourses.setResult(updatedMockList);
    store.refreshState();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('app-course-card');
    expect(cards.length).toBe(3);
  });
});
