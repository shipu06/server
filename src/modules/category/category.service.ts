import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "src/db/repositories/category.repository";

@Injectable()
export class CategoryService {
    constructor( private readonly categoryRepo: CategoryRepository) {}

    createCategory(payload) {
        return this.categoryRepo.createCategory(payload);
    }
}