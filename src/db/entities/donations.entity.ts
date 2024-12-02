import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./abstract/base.entity";
import { Campaign } from "./campaign.entity";
import { DonationType } from "../enum/db.enum";
import { User } from "./user.entity";

@Entity({ name: 'donation' })
export class Donation extends BaseEntity {
    @Column({ name: 'amount', nullable: false })
    amount: number;

    @Column({ name: 'payment_mode', nullable: false, type: 'enum', enum: DonationType })
    paymentMode: DonationType;

    @Column({ name: 'order_id', nullable: true })
    orderId: number;

    @ManyToOne(() => Campaign, (campaign) => campaign.donations, { onDelete: "CASCADE" })
    campaign: Campaign;

    @ManyToOne(() => User, (user) => user.donationsReceived, { onDelete: "CASCADE" })
    receivedBy: User;
}