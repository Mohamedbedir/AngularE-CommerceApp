import { CanActivateChildFn } from '@angular/router';
import { PayloadService } from '../Services/payload-service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const payloadService = inject(PayloadService);

  return payloadService.getRole() === 'Admin';
};
