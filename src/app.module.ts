import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { UserModule } from './modules/user/user.module';
import { BootstrapService } from './modules/bootstrap/bootstrap.service';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { CampaignModule } from './modules/campaign/campaign.module';
import { CategoryModule } from './modules/category/category.module';
import { DonationModule } from './modules/donation/donation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Shivam123',
      database: 'rsf-server',
      entities: [path.resolve(__dirname, './db/entities/*.entity.{ts,js}')],
      synchronize: true,
    }),
    UserModule, AuthModule, RoleModule, CampaignModule, CategoryModule, DonationModule
  ],
  controllers: [],
  providers: [BootstrapService],
})
export class AppModule {}
