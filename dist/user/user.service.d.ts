import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser, Login } from './user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getUser(): Promise<{
        data: User[];
    }>;
    getOneUser(userName: string): Promise<{
        data: User;
    }>;
    newUser(newuser: CreateUser): Promise<{
        data: CreateUser & User;
    }>;
    login(user: Login): Promise<{
        data: User;
    }>;
}
