import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Donation } from "../entities/donations.entity";

@Injectable()
export class DonationRepository extends Repository<Donation> {
    constructor(private dataSource: DataSource) {
        super(Donation, dataSource.createEntityManager());
    }

    fetchDonationList() {
        return this.find();
    }

    fetchDonation(where) {
        return this.find({ where });
    }

    createDonation(payload) {
        return this.save(this.create(payload));
    }

    updateDonation(payload) {
        return this.save(payload);
    }
}