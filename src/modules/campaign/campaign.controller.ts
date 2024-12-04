import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CampaignService } from "./campaign.service";
import { FileInterceptor } from "@nestjs/platform-express";


@Controller('campaign')
export class CampaignController {
    constructor(private readonly campaignService: CampaignService) {}

    @Get()
    async fetchActiveCampaign() {
        return this.campaignService.fetchCampaigns();
    }

    @Post()
    @UseInterceptors(FileInterceptor('coverImage'))
    async createCampaign(@Body() payload, @UploadedFile() file: Express.Multer.File) {
        return this.campaignService.createCampaign({...payload, coverImage: file?.buffer});
    }
}