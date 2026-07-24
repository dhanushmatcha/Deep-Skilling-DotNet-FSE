import { TestBed } from '@angular/core/testing';
import { loadingInterceptor } from './loading-interceptor';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { LoadingService } from '../services/loading';

describe('loadingInterceptor', () => {
  it('should call loading service show and hide', (done) => {
    const loadingServiceSpy = jasmine.createSpyObj('LoadingService', ['show', 'hide']);
    TestBed.configureTestingModule({
      providers: [{ provide: LoadingService, useValue: loadingServiceSpy }]
    });

    const req = new HttpRequest('GET', '/api/courses');
    const next: HttpHandlerFn = () => of(new HttpResponse({ status: 200 }));

    TestBed.runInInjectionContext(() => {
      loadingInterceptor(req, next).subscribe({
        next: () => {
          expect(loadingServiceSpy.show).toHaveBeenCalled();
        },
        complete: () => {
          setTimeout(() => {
            expect(loadingServiceSpy.hide).toHaveBeenCalled();
            done();
          }, 0);
        }
      });
    });
  });
});
