import { PipeTransform } from '@nestjs/common';
import { CreateUser } from 'src/user/user.dto';
export declare class CreateUserPipe implements PipeTransform<any> {
    transform(value: CreateUser): Promise<CreateUser>;
}
