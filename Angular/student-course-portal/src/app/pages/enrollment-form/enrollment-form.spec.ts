import { TestBed } from '@angular/core/testing';
import { EnrollmentFormComponent } from './enrollment-form';

describe('EnrollmentFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentFormComponent]
    }).compileComponents();
  });

  it('should create EnrollmentFormComponent', () => {
    const fixture = TestBed.createComponent(EnrollmentFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
