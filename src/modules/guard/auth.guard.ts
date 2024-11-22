
import { Injectable, CanActivate, ExecutionContext, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if(!token) throw new BadRequestException('User token unavailable');
    try {
        const decoded = this.jwtService.verify(token, { secret: 'ngo-server-jwt-password-for-secrecy' });;
        request.user = decoded;  
        return true;
      } catch (error) {
        throw new UnauthorizedException('Invalid or expired token');
      }
  }
}
