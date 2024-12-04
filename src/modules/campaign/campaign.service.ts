import { Injectable } from "@nestjs/common";
import { CampaignRepository } from "src/db/repositories/campaign.repository";

@Injectable()
export class CampaignService {
    constructor( private readonly campaignRepo: CampaignRepository) {}

    fetchCampaigns() {
        return this.campaignRepo.fetchCampaigns(null);
    }

    createCampaign(payload) {
        return this.campaignRepo.createCampaign(payload);
    }
}