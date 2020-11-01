import { CreateTag } from './tag.dto';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getBoard(): Promise<{
        data: import("../entities/tag.entity").Tag[];
    }>;
    getOneTag(tagId: string): Promise<{
        data: import("../entities/tag.entity").Tag;
    }>;
    newTag(tag: CreateTag): Promise<{
        data: CreateTag & import("../entities/tag.entity").Tag;
    }>;
}
