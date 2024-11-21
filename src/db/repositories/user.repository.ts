import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
      }
    async createUser(user) {
        return this.save(this.create(user));
    }

    async findOneUser(where){
        return await this.findOne({where});
    }

    async signInUser(payload) {
        return this.findOne({ where: [{ username: payload },  {email: payload}, {phoneNumber: payload}]})
    }
}