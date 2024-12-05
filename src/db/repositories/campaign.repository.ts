import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Campaign } from "../entities/campaign.entity";

@Injectable()
export class CampaignRepository extends Repository<Campaign> {
    constructor(private dataSource: DataSource) {
        super(Campaign, dataSource.createEntityManager());
    }

    async fetchSingleCampaign(where){
        return await this.findOne({where});
    }

    async fetchCampaigns(where){
        return await this.find({where, relations: ['managedBy']});
    }

    async createCampaign(payload){
        return await this.save(this.create(payload));
    }
}