import {
    PipeTransform,
    Injectable,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { CreateSharedBoard } from 'src/shared-board/shared-board.dto';
  
  @Injectable()
  export class CreateSharedBoardPipe implements PipeTransform<any> {
    async transform(value: CreateSharedBoard) {
      if (!value.boardId){
          throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'BOARD_REQUIRED',
              },
              HttpStatus.BAD_REQUEST,
          );
      }
      if (!value.sharedUsername){
          throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: 'USERNAME_REQUIRED',
              },
              HttpStatus.BAD_REQUEST,
          );
      }
      return value;
    }
  }