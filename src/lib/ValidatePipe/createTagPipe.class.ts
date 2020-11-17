import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateTag } from 'src/tag/tag.dto';

@Injectable()
export class CreateTagPipe implements PipeTransform<any> {
  async transform(value: CreateTag) {
    if (!value.name) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'NAME_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!value.board) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'BOARD_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!value.column) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'COLUMN_REQUIRED',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
