import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../entities/abstract/base.entity";
import { User } from "./user.entity";

@Entity({ name: 'role' })
export class Role extends BaseEntity {
    @Column({ name: 'role', nullable: false })
    role: string;

    @ManyToMany(() => User)
    users: User[]
}