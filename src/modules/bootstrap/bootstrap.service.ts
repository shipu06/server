import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AdminUser } from './bootstrap.data';
import { UserService } from '../user/user.service';
import { RoleService } from '../role/role.service';
@Injectable()
export class BootstrapService implements OnApplicationBootstrap {
  constructor(
    private readonly userService: UserService,
    private readonly roleService: RoleService
  ) {}

  async onApplicationBootstrap() {
    try {
      const existingRoles = await this.roleService.fetchAllRoles();
    
      if (existingRoles && existingRoles.length < 1) {
        const admin = await this.roleService.create([{ role: 'admin' }]);
    
        const existingUser = await this.userService.findOneUser({ email: AdminUser?.email });
    
        if (!existingUser) {
          await this.userService.createUser({ ...AdminUser, roles: admin });
        }
      }
    } catch (error) {
      console.error("Error during application bootstrap:", error);
      throw error;
    }    
  }
}
