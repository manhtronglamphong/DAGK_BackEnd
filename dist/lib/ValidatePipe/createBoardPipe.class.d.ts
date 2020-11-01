import { PipeTransform } from '@nestjs/common';
import { CreateBoard } from 'src/board/board.dto';
export declare class CreateBoardPipe implements PipeTransform<any> {
    transform(value: CreateBoard): Promise<CreateBoard>;
}
