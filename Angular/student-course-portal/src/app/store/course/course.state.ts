import { Course } from '../../models/course.interface';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [
    { id: 101, name: 'Angular Architecture & Signals', code: 'CS-ANG20', credits: 4, gradeStatus: 'passed', fee: 399.99, createdDate: new Date('2026-01-10') },
    { id: 102, name: 'TypeScript Advanced Patterns', code: 'CS-TS401', credits: 3, gradeStatus: 'failed', fee: 249.50, createdDate: new Date('2026-02-01') },
    { id: 103, name: 'RxJS & State Management', code: 'CS-RXJ30', credits: 4, gradeStatus: 'pending', fee: 349.00, createdDate: new Date('2026-03-15') },
    { id: 104, name: 'Angular Forms & Validations', code: 'CS-FRM10', credits: 3, gradeStatus: 'passed', fee: 199.99, createdDate: new Date('2026-04-05') },
    { id: 105, name: 'Micro-Frontends with Angular', code: 'CS-MFE50', credits: 5, gradeStatus: 'pending', fee: 499.99, createdDate: new Date('2026-05-20') }
  ],
  loading: false,
  error: null
};
