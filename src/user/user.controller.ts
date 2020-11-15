import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserPipe } from 'src/lib/ValidatePipe/createUserPipe.class';
import { CreateUser, Login } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get('')
  async getUser() {
    return await this.userService.getUser();
  }

  @Get(':username')
  async getOneUser(@Param('username') username: string) {
    return await this.userService.getOneUser(username);
  }

  @Post('/register')
  async newUser(@Body(new CreateUserPipe()) user: CreateUser) {
    console.log(user.username + 'hihi' + user.password);
    return await this.userService.newUser(user);
  }

  @Post('/login')
  async Login(@Body() user: Login) {
    return await this.userService.login(user);
  }
}
