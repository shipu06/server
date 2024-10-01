import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '@Shivam123',
    database: 'server',
    entities: [],
    synchronize: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
