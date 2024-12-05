import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { DonationService } from "./donation.service";

@Controller('donation')
export class DonationController {
    constructor(private readonly donationService: DonationService) {}

    @Get()
    fetchDonationList() {
        return this.donationService.fetchDonationList();
    }

    @Get('/:id')
    fetchDonation(@Param('id') id: string) {
        return this.donationService.fetchDonation({id});
    }

    @Post()
    createDonation(@Body() payload) {
        return this.donationService.createDonation(payload);
    }

    @Patch('/:id')
    updateDonation(@Param('id') id: string, @Body() payload) {
        return this.donationService.updateDonation(id, payload);
    }
}