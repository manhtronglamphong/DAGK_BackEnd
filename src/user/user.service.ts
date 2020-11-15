import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUser, Login } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser() {
    const user = await this.userRepository.find();
    return { data: user };
  }

  async getOneUser(userName: string) {
    const user = await this.userRepository.findOne({
      where: { username: userName },
    });
    return { data: user };
  }

  async newUser(newuser: CreateUser) {
    const existUser = await this.userRepository.findOne({
      where: { username: newuser.username },
    });
    if (existUser) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'USERNAME ALREADY EXISTS',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const newl = await this.userRepository.save(newuser);
    newl.password = await hash(newl.password, 10);
    return { data: newl };
  }

  async login(user: Login) {
    const existUser = await this.userRepository.findOne({
      where: { username: user.username },
    });
    if (!existUser) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'USERNAME NOT FOUND',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (user.password != existUser.password) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'WRONG PASSWORD',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return { data: existUser };
  }
}
