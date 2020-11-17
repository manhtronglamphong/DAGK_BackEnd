import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagPipe } from 'src/lib/ValidatePipe/createTagPipe.class';
import { BoardTag, CreateTag } from './tag.dto';
import { TagService } from './tag.service';

@ApiTags('Tag')
@Controller('tag')
export class TagController {
  constructor(
    @Inject(TagService)
    private readonly tagService: TagService,
  ) {}

  @Get('/:username/:board')
  async getBoard(
    @Param('username') username: string,
    @Param('board') board: string,
  ) {
    return await this.tagService.getTag(username, board);
  }

  @Get(':tagId')
  async getOneTag(@Param('tagId') tagId: string) {
    return await this.tagService.getOneTag(tagId);
  }

  @Get('/board/:boardId')
  async getBoardTag(@Param('boardId') boardId: string) {
    return await this.tagService.getBoardTag(boardId);
  }

  @Post('/newTag')
  async newTag(@Body(new CreateTagPipe()) tag: CreateTag) {
    return await this.tagService.newBoard(tag);
  }
}
