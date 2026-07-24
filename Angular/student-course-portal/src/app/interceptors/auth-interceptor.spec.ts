import { TestBed } from '@angular/core/testing';
import { authInterceptor } from './auth-interceptor';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('authInterceptor', () => {
  it('should attach authorization header', (done) => {
    const req = new HttpRequest('GET', '/api/courses');
    const next: HttpHandlerFn = (request) => {
      expect(request.headers.has('Authorization')).toBeTrue();
      expect(request.headers.get('Authorization')).toBe('Bearer mock-jwt-token-xyz123');
      return of(new HttpResponse({ status: 200 }));
    };

    TestBed.runInInjectionContext(() => {
      authInterceptor(req, next).subscribe(() => done());
    });
  });
});
