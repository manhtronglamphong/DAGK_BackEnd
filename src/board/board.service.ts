import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoard } from './board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>,
      ) {}

    async getBoard(){
        const board = await this.boardRepository.find();
        return {data: board};
    }

    async getOneBoard(boardId:string){
        const board = await this.boardRepository.findOne({where :{id:boardId}});
        return {data: board};
    }

    async getUserBoard(userName:string){
        const board = await this.boardRepository.find({where:{username:userName}});
        return {data: board};
    }

    async newBoard(newboard:CreateBoard){
        const newl = await this.boardRepository.save(newboard);
        return {data: newl};
      }

}
