import { Injectable } from "@nestjs/common";
import { RoleRepository } from "src/db/repositories/role.repository";

@Injectable()
export class RoleService {
    constructor( private readonly roleRepo: RoleRepository) {}

    async fetchAllRoles() {
        return await this.roleRepo.fetchAllRoles();
    }

    async fetchOne(where) {
        return await this.roleRepo.fetchOne(where);
    }

    async create(roles) {
        return await this.roleRepo.createRoles(roles);
    }

    async updateRole(id, payload) {
        const role = this.fetchOne({id});        
        return await this.roleRepo.updateRole({...role, ...payload});
    }
}