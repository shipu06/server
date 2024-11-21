import { Injectable } from "@nestjs/common";
import { UserRepository } from "./../../db/repositories/user.repository";
import { plainToHash } from "../common/bcrypt.service";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepo: UserRepository
    ) {}

    async createUser(user){
        const hashedPassword = await plainToHash(user?.password);
        return this.userRepo.createUser({...user, password: hashedPassword});
    }

    findOneUser(where){
        return this.userRepo.findOneUser(where);
    }

    signInUser(payload: string) {
        return this.userRepo.signInUser(payload);
    }
}