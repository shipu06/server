import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "src/db/repositories/category.repository";

@Injectable()
export class CategoryService {
    constructor( private readonly categoryRepo: CategoryRepository) {}

    fetchCategoryList() {
        return this.categoryRepo.fetchCategoryList();
    }

    createCategory(payload) {
        return this.categoryRepo.createCategory(payload);
    }

    async updateCategory(id, payload) {
        const category = await this.categoryRepo.fetchCategory({id})
        return this.categoryRepo.updateCategory({...category, ...payload});
    }
}