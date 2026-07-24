import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card';
import { Course } from '../../models/course.interface';
import { SimpleChange } from '@angular/core';
import { selectIsCourseEnrolled } from '../../store/enrollment/enrollment.selectors';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  const dummyCourse: Course = {
    id: 101,
    name: 'Angular Fundamentals',
    code: 'CS-ANG20',
    credits: 4,
    gradeStatus: 'passed',
    fee: 299.99,
    createdDate: new Date('2026-01-01')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectIsCourseEnrolled(101), value: false }
          ]
        })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = dummyCourse;

    component.ngOnChanges({
      course: new SimpleChange(null, dummyCourse, true)
    });

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render @Input course data correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.course-name')?.textContent).toContain('ANGULAR FUNDAMENTALS');
    expect(compiled.querySelector('.course-code')?.textContent).toContain('CS-ANG20');
  });

  it('should emit @Output enrollRequested event when button is clicked', () => {
    spyOn(component.enrollRequested, 'emit');
    const enrollBtn = fixture.nativeElement.querySelector('.btn-card-enroll') as HTMLButtonElement;

    enrollBtn.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(101);
  });

  it('should toggle expanded details state on toggleDetails click', () => {
    expect(component.isExpanded).toBeFalse();

    component.toggleDetails();
    fixture.detectChanges();

    expect(component.isExpanded).toBeTrue();
  });

  it('should trigger ngOnChanges lifecycle behavior correctly', () => {
    const updatedCourse: Course = { ...dummyCourse, name: 'Angular Advanced' };
    component.course = updatedCourse;
    component.ngOnChanges({
      course: new SimpleChange(dummyCourse, updatedCourse, false)
    });
    expect(component.course.name).toBe('Angular Advanced');
  });
});
