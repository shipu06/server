import { Module } from "@nestjs/common";
import { RoleService } from "./role.service";
import { RoleRepository } from "src/db/repositories/role.repository";

@Module({
    imports: [],
    providers: [RoleService, RoleRepository],
    controllers: [],
    exports: [RoleService, RoleRepository]
})

export class RoleModule{};