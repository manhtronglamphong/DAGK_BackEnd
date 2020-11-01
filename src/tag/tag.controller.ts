import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagPipe } from 'src/lib/ValidatePipe/createTagPipe.class';
import { CreateTag } from './tag.dto';
import { TagService } from './tag.service';

@ApiTags('Tag')
@Controller('tag')
export class TagController {

    constructor(
        @Inject(TagService)
        private readonly tagService: TagService,
    ) {}

    @Get('')
    async getBoard(){
        return await this.tagService.getTag();
    }

    @Get(':tagId')
    async getOneTag(@Param('tagId') tagId: string){
        return await this.tagService.getOneTag(tagId);
    }

    @Post('/newTag')
    async newTag(@Body(new CreateTagPipe) tag: CreateTag){
    return await this.tagService.newBoard(tag);
    }

}
