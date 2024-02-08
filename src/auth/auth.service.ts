import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { UtilsService } from 'src/utils/utils.service';
import { LuxonService } from 'src/luxon/luxon.service';
import { DataSource } from 'typeorm';
import { User } from 'src/database/entities/User.entity';
import { UserDto } from 'src/users/dto/user.dto';


@Injectable()
export class AuthService {


	constructor(
		private usersService: UsersService,
		private utilsService: UtilsService,
		private dataSource: DataSource,
	) { }

	async loginService(loginDto: LoginDto): Promise<any> {
		let user = await this.usersService.getUserByEmail(loginDto.email);
		user.lastLogin = LuxonService.getStandardDate;
		user = await this.dataSource.getRepository(User).save(user);
		return {
			accessToken: await this.utilsService.jwtToken(user),
			...user
		}
	}

	async createUserService(userDto: UserDto): Promise<any> {
		return await this.usersService.createUserService(userDto);
	}
}
