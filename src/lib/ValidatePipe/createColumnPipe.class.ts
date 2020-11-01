import {
    PipeTransform,
    Injectable,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { CreateColumn } from 'src/column/column.dto';
  
  @Injectable()
  export class CreateColumnPipe implements PipeTransform<any> {
    async transform(value: CreateColumn) {
      if (!value.boardId){
          throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'BOARD_REQUIRED',
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