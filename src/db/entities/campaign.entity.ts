import { Column, Entity } from "typeorm";
import { BaseEntity } from "./abstract/base.entity";

@Entity({ name: 'campaign' })
export class Campaign extends BaseEntity {
    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'targetAmount', nullable: false })
    targetAmount: number;
}