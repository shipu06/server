import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "./../../db/repositories/user.repository";
import { UserController } from "./user.controller";
import { JwtService } from "@nestjs/jwt";
import { RoleModule } from "../role/role.module";

@Module({
    imports: [RoleModule],
    providers: [UserService, UserRepository, JwtService],
    controllers: [UserController],
    exports: [UserService, UserRepository]
})

export class UserModule {};