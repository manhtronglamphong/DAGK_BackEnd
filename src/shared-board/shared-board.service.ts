import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedBoard } from 'src/entities/shared-board.entity';
import { Repository } from 'typeorm';
import { CreateSharedBoard } from './shared-board.dto';

@Injectable()
export class SharedBoardService {

    constructor(
        @InjectRepository(SharedBoard)
        private readonly sharedBoardRepository: Repository<SharedBoard>,
      ) {}

    async getsharedBoard(){
        const sharedboard = await this.sharedBoardRepository.find();
        return {data: sharedboard};
    }

    async getOnesharedBoard(sharedBoardId:string){
        const sharedBoard = await this.sharedBoardRepository.findOne({where :{boardId:sharedBoardId}});
        return {data: sharedBoard};
    }

    async newsharedBoard(newsharedBoard:CreateSharedBoard){
        const newl = await this.sharedBoardRepository.save(newsharedBoard);
        return {data: newl};
      }

}
