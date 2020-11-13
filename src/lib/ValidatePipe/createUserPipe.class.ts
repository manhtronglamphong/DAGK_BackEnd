import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUser } from 'src/user/user.dto';

@Injectable()
export class CreateUserPipe implements PipeTransform<any> {
  async transform(value: CreateUser) {
    if (!value.username) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'USERNAME_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!value.password) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'PASSWORD_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
