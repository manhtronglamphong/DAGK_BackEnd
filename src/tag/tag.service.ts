import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTag, DeleteTag, RenameTag } from './tag.dto';
var Objecttt = require('mongodb').ObjectID;

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async getTag(username: string, board: string) {
    const temp = await this.tagRepository.find({
      where: { username: username, board: board },
    });
    return { data: temp };
  }

  async getOneTag(tagId: string) {
    const tag = await this.tagRepository.findOne({ where: { id: tagId } });
    return { data: tag };
  }

  async newBoard(newtag: CreateTag) {
    let temp = await this.tagRepository.findOne({
      where: {
        username: newtag.username,
        name: newtag.name,
        board: newtag.board,
        column: newtag.column,
      },
    });
    if (temp) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'TAG ALREADY EXISTS',
        },
        HttpStatus.NOT_FOUND,
      );
      return;
    }
    const newl = await this.tagRepository.save(newtag);
    return { data: newl };
  }

  async getBoardTag(boardId: string) {
    const tag = await this.tagRepository.find({
      where: { board: boardId },
    });
    return { data: tag };
  }

  async deleteTag(tag: DeleteTag) {
    let temp = await this.tagRepository.findOne({
      where: { _id: Objecttt(tag.id) },
    });
    const del = await this.tagRepository.delete(temp);
    return { data: del };
  }

  async renameTag(tag: RenameTag) {
    let temp = await this.tagRepository.findOne({
      where: { _id: Objecttt(tag.id) },
    });
    temp.name = tag.newName;
    await this.tagRepository.update(temp._id.toString(), temp);
    return { data: temp };
  }
}
