import {
    PipeTransform,
    Injectable,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { CreateBoard } from 'src/board/board.dto';
  
  @Injectable()
  export class CreateBoardPipe implements PipeTransform<any> {
    async transform(value: CreateBoard) {
      if (!value.username){
          throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'USERNAME_REQUIRED',
              },
              HttpStatus.BAD_REQUEST,
          );
      }
      if (!value.name){
          throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'NAME_REQUIRED',
              },
              HttpStatus.BAD_REQUEST,
          );
      }
      return value;
    }
  }