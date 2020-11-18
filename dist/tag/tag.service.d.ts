import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTag, DeleteTag, RenameTag } from './tag.dto';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getTag(username: string, board: string): Promise<{
        data: Tag[];
    }>;
    getOneTag(tagId: string): Promise<{
        data: Tag;
    }>;
    newBoard(newtag: CreateTag): Promise<{
        data: CreateTag & Tag;
    }>;
    getBoardTag(boardId: string): Promise<{
        data: Tag[];
    }>;
    deleteTag(tag: DeleteTag): Promise<{
        data: import("typeorm").DeleteResult;
    }>;
    renameTag(tag: RenameTag): Promise<{
        data: Tag;
    }>;
}
