import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./abstract/base.entity";
import { User } from "./user.entity";
import { Recipient } from "./recipient.entity";
import { Donation } from "./donations.entity";
import { Category } from "./category.entity";

@Entity({ name: 'campaign' })
export class Campaign extends BaseEntity {
    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'description', nullable: false })
    description: string;

    @ManyToOne(() => Category, (category) => category.campaign)
    category: Category;

    @Column('blob', { nullable: true })
    coverImage: Buffer;

    @Column({ name: 'startDate', nullable: false })
    startDate: Date;

    @Column({ name: 'endDate', nullable: true })
    endDate: Date;

    @Column({ name: 'collectedAmount', nullable: true, default: 0 })
    collectedAmount: number;

    @Column({ name: 'targetAmount', nullable: false })
    targetAmount: number;

    @OneToMany(() => Donation, (donation) => donation.campaign, { cascade: true })
    donations: Donation[];

    @ManyToOne(() => User, (user) => user.campaign)
    managedBy: User;

    @ManyToMany(() => Recipient, (recipient) => recipient.campaign, { cascade: true })
    @JoinTable({name: 'campaign_recipients'})
    recipients: Recipient[];
}