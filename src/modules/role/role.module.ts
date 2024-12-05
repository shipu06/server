import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleRepository } from "src/db/repositories/role.repository";
import { RoleController } from "./role.controller";

@Module({
    imports: [],
    providers: [RoleService, RoleRepository],
    controllers: [RoleController],
    exports: [RoleService, RoleRepository]
})

export class RoleModule{};