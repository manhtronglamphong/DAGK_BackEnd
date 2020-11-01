import { PipeTransform } from '@nestjs/common';
import { CreateColumn } from 'src/column/column.dto';
export declare class CreateColumnPipe implements PipeTransform<any> {
    transform(value: CreateColumn): Promise<CreateColumn>;
}
