import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/database/entities/User.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getUserByEmail(email: string): Promise<User>{
    return this.createQueryBuilder('user').select(['user']).where('user.email = :email', { email }).execute();
  }
}