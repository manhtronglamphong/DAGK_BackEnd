import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTag } from './tag.dto';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getTag(): Promise<{
        data: Tag[];
    }>;
    getOneTag(tagId: string): Promise<{
        data: Tag;
    }>;
    newBoard(newtag: CreateTag): Promise<{
        data: CreateTag & Tag;
    }>;
    getBoardTag(boardId: string): Promise<{
        data: Tag;
    }>;
}
