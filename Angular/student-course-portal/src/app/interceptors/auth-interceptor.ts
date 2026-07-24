import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer mock-jwt-token-xyz123')
  });
  return next(authReq);
};
