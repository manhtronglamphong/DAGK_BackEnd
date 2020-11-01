import { PipeTransform } from '@nestjs/common';
import { CreateSharedBoard } from 'src/shared-board/shared-board.dto';
export declare class CreateSharedBoardPipe implements PipeTransform<any> {
    transform(value: CreateSharedBoard): Promise<CreateSharedBoard>;
}
