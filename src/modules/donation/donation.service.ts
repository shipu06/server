import { Injectable } from "@nestjs/common";
import { DonationRepository } from "src/db/repositories/donation.repository";

@Injectable()
export class DonationService {
    constructor(private readonly donationRepo: DonationRepository) {}

    fetchDonationList() {
        return this.donationRepo.fetchDonationList();
    }

    fetchDonation(where) {
        return this.donationRepo.fetchDonation(where);
    }

    createDonation(payload) {
        return this.donationRepo.createDonation(payload);
    }

    async updateDonation(id, payload) {
        const donation = await this.fetchDonation({id});
        return this.donationRepo.updateDonation({...donation, ...payload});
    }
}