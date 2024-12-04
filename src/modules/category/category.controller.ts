import { Body, Controller, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    async createCategory(@Body() payload){
        return  this.categoryService.createCategory(payload);
    }
}