import {
    CanActivate,
    ExecutionContext,
    Injectable,
    ForbiddenException,
  } from '@nestjs/common';
  
  @Injectable()
  export class RoleGuard implements CanActivate {
    constructor(private readonly requiredRoles: string[]) {}
  
    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest();
      const { user } = request;
  
      if (!user) {
        throw new ForbiddenException('User not found in request');
      }
        const hasRole = this.requiredRoles.some((role) => user.roles?.includes(role));
      if (!hasRole) {
        throw new ForbiddenException('You do not have permission to access this resource');
      }
  
      return true;
    }
  }
  