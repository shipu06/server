import { Module } from "@nestjs/common";
import { DonationController } from "./donation.controller";
import { DonationService } from "./donation.service";
import { DonationRepository } from "src/db/repositories/donation.repository";

@Module({
    imports: [],
    controllers: [DonationController],
    providers: [DonationService, DonationRepository],
    exports: [DonationService]
})

export class DonationModule {};