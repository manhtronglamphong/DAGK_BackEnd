import { CreateTag, DeleteTag, RenameTag } from './tag.dto';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getBoardTag(boardId: string): Promise<{
        data: import("../entities/tag.entity").Tag[];
    }>;
    newTag(tag: CreateTag): Promise<{
        data: CreateTag & import("../entities/tag.entity").Tag;
    }>;
    deleteTag(tag: DeleteTag): Promise<{
        data: import("typeorm").DeleteResult;
    }>;
    renameTag(tag: RenameTag): Promise<{
        data: import("../entities/tag.entity").Tag;
    }>;
}
