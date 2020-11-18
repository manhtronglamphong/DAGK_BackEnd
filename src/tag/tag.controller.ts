import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagPipe } from 'src/lib/ValidatePipe/createTagPipe.class';
import { CreateTag, DeleteTag, RenameTag } from './tag.dto';
import { TagService } from './tag.service';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(
    @Inject(TagService)
    private readonly tagService: TagService,
  ) {}

  @Get('/board/:boardId')
  async getBoardTag(@Param('boardId') boardId: string) {
    return await this.tagService.getBoardTag(boardId);
  }

  @Post('/newTag')
  async newTag(@Body(new CreateTagPipe()) tag: CreateTag) {
    return await this.tagService.newBoard(tag);
  }

  @Post('/deleteTag')
  async deleteTag(@Body() tag: DeleteTag) {
    return await this.tagService.deleteTag(tag);
  }

  @Post('/renameTag')
  async renameTag(@Body() tag: RenameTag) {
    return await this.tagService.renameTag(tag);
  }
}
