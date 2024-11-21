import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../entities/abstract/base.entity";
import { Role } from "./role.entity";

@Entity({ name: 'user' })
export class User extends BaseEntity {
    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'username', nullable: false, unique: true })
    username: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'phone_number', nullable: false, unique: true })
    phoneNumber: string;

    @Column({ name: 'gender', nullable: false })
    gender: string;

    @Column({ name: 'password', nullable: false })
    password: string

    @ManyToMany(() => Role, { cascade: true })
    @JoinTable()
    roles: Role[];
}