import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CoursesLayoutComponent } from './courses-layout';

describe('CoursesLayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesLayoutComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create CoursesLayoutComponent', () => {
    const fixture = TestBed.createComponent(CoursesLayoutComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
