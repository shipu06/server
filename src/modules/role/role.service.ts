import { Injectable } from "@nestjs/common";
import { RoleRepository } from "src/db/repositories/role.repository";

@Injectable()
export class RoleService {
    constructor( private readonly roleRepo: RoleRepository) {}

    async fetchAllRoles() {
        return await this.roleRepo.findAllRoles();
    }

    async create(roles) {
        return await this.roleRepo.createRoles(roles);
    }
}