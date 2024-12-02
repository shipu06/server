import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "./abstract/base.entity";
import { RecipientType } from "../enum/db.enum";
import { Campaign } from "./campaign.entity";

@Entity({ name: 'recipient' })
export class Recipient extends BaseEntity {
    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'dob', nullable: false })
    dob: Date;

    @Column({ name: 'type', nullable: false, type: 'enum', enum: RecipientType, default: RecipientType.STUDENT })
    type: RecipientType;

    @Column({ name: 'address', nullable: false })
    address: string;

    @ManyToMany(() => Campaign, (campaign) => campaign.recipients)
    campaign: Campaign[];
}