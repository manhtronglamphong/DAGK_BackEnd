import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser } from './user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}

    async getUser(){
        const user = await this.userRepository.find();
        return {data: user};
    }

    async getOneUser(userName:string){
        const user = await this.userRepository.findOne({where :{username:userName}});
        return {data: user};
    }

    async newUser(newuser:CreateUser){
        const newl = await this.userRepository.save(newuser);
        newl.password = await hash(newl.password,10);
        return {data: newl};
      }

}
