import { PipeTransform } from '@nestjs/common';
import { CreateTag } from 'src/tag/tag.dto';
export declare class CreateTagPipe implements PipeTransform<any> {
    transform(value: CreateTag): Promise<CreateTag>;
}
