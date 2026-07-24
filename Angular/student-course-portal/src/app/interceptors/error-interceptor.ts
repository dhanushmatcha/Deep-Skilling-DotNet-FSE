import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('HTTP 401 Unauthorized: Access token invalid or expired.');
      } else if (error.status === 500) {
        console.error('HTTP 500 Internal Server Error: Backend server encountered an unexpected failure.');
      } else {
        console.error(`HTTP Error Status ${error.status}:`, error.message);
      }
      return throwError(() => error);
    })
  );
};
