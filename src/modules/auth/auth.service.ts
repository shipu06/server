import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compareHash } from "../common/bcrypt.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService,    ) {}

    async signIn(payload: any) {
        const user = await this.userService.signInUser(payload?.userKey);
        if(user) {
            const isMatched = await compareHash(user?.password, payload?.password);
            if (isMatched) {
                const roles = user?.roles.map((ele) => ele?.role);
                const data = { id: user?.id, name: user?.name, username: user?.username, roles };
                const access_token = this.jwtService.sign(data); 
                delete user?.password;
                return { access_token, user:  { ...user, roles}};
            }
            return 'Invalid password'
        }
        return 'Invalid credentials';
    }
}