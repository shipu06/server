import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async fetchCategory(){
        return  this.categoryService.fetchCategoryList();
    }

    @Post()
    async createCategory(@Body() payload){
        return  this.categoryService.createCategory(payload);
    }

    @Patch('/:id')
    async updateCategory(@Body() payload, @Param('id') id: string){
        return  this.categoryService.updateCategory(id, payload);
    }
}