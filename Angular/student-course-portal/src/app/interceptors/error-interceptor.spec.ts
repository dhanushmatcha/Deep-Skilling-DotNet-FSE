import { TestBed } from '@angular/core/testing';
import { errorInterceptor } from './error-interceptor';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('errorInterceptor', () => {
  it('should pass through successful requests', (done) => {
    const req = new HttpRequest('GET', '/api/courses');
    const next: HttpHandlerFn = () => of(new HttpResponse({ status: 200 }));

    TestBed.runInInjectionContext(() => {
      errorInterceptor(req, next).subscribe((res) => {
        expect(res).toBeTruthy();
        done();
      });
    });
  });
});
