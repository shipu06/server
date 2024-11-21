import { Body, Controller, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('sign-in')
    signUp(@Body() payload: any) {
        return this.authService.signIn(payload);
    }
}