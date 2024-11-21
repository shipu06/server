import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { RoleGuard } from "../guard/role.guard";


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('register')
    @UseGuards(new RoleGuard(['admin']))
    createUser(@Req() req: any, @Body() user: any){
        return this.userService.createUser(user);
    }
}