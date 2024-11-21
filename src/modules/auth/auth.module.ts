import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [        
    JwtModule.register({
        secret: 'ngo-server-jwt-password-for-secrecy',  // Secret key to sign the JWT (can be stored in environment variables)
        signOptions: {
          expiresIn: '1h',  // JWT expiration time
        },
      }),UserModule],
    providers: [AuthService],
    controllers: [AuthController],
    exports: []
})
export class AuthModule {};
