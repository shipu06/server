import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../entities/abstract/base.entity";
import { Role } from "./role.entity";
import { Campaign } from "./campaign.entity";
import { Donation } from "./donations.entity";

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

    @OneToMany(() => Campaign, (campaign) => campaign.managedBy, { cascade: true })
    campaign: Campaign[];

    @OneToMany(() => Donation, (donation) => donation.receivedBy, { cascade: true })
    donationsReceived: Donation[];

    @OneToMany(() => Donation, (donation) => donation.user)
    donations: Donation[];
}