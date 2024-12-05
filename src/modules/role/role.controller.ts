import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { RoleService } from "./role.service";

@Controller('role')
export class RoleController {
    constructor(
        private readonly roleService: RoleService
    ) {}

    @Get()
    fetchAllRoles() {
        return this.roleService.fetchAllRoles()
    }

    @Get('/:id')
    fetchRole(@Param('id') id: string) {
        return this.roleService.fetchOne({id});
    }

    @Post()
    createRole(@Body() payload: any) {
        return this.roleService.create(payload);
    }

    @Patch('/:id')
    updateRole(@Param('id') id: string, @Body() payload: any) {
        return this.roleService.updateRole(id, payload);
    }
}