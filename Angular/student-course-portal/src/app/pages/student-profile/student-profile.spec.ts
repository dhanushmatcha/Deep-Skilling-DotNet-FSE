import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { StudentProfileComponent } from './student-profile';
import { selectEnrolledCourseObjects } from '../../store/cross-feature.selectors';

describe('StudentProfileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({
          selectors: [
            { selector: selectEnrolledCourseObjects, value: [] }
          ]
        })
      ]
    }).compileComponents();
  });

  it('should create StudentProfileComponent', () => {
    const fixture = TestBed.createComponent(StudentProfileComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
