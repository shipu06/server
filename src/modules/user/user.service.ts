import { Injectable } from "@nestjs/common";
import { UserRepository } from "./../../db/repositories/user.repository";
import { plainToHash } from "../common/bcrypt.service";
import { RoleService } from "../role/role.service";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly roleService: RoleService
    ) {}

    async createUser(user){
        let userRoles = null;
        const hashedPassword = await plainToHash(user?.password);
        if(user && (user.roles || !user.roles?.length)){
            userRoles = await this.roleService.fetchOne({ role: 'member' });
        }
        return this.userRepo.createUser({...user, roles: [userRoles], password: hashedPassword});
    }

    findOneUser(where){
        return this.userRepo.findOneUser(where);
    }

    signInUser(payload: string) {
        return this.userRepo.signInUser(payload);
    }
}