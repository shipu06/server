import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./abstract/base.entity";
import { Campaign } from "./campaign.entity";

@Entity({  name: 'category' })
export class Category extends BaseEntity {
    @Column({ name: 'name', nullable: false })
    name: string;

    @OneToMany(() => Campaign, (campaign) => campaign.category, { cascade: true })
    campaign: Campaign[];
}