import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "./../../db/repositories/user.repository";
import { UserController } from "./user.controller";

@Module({
    imports: [],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService, UserRepository]
})

export class UserModule {};