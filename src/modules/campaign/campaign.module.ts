import { Module } from "@nestjs/common";
import { CampaignController } from "./campaign.controller";
import { CampaignService } from "./campaign.service";
import { CampaignRepository } from "src/db/repositories/campaign.repository";


@Module({
    imports: [],
    controllers: [CampaignController],
    providers: [CampaignService, CampaignRepository],
    exports: [CampaignService]
})

export class CampaignModule {};