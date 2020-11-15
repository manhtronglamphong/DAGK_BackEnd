import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTag } from './tag.dto';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
      ) {}

    async getTag(){
        const tag = await this.tagRepository.find();
        return {data: tag};
    }

    async getOneTag(tagId:string){
        const tag = await this.tagRepository.findOne({where :{id:tagId}});
        return {data: tag};
    }

    async newBoard(newtag:CreateTag){
        const newl = await this.tagRepository.save(newtag);
        return {data: newl};
      }

    async getBoardTag(boardId:string){
        const tag = await this.tagRepository.find({where :{boardId:boardId}});
        return {data: tag};
    }

}
