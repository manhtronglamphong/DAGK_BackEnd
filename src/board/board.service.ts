import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoard, DeleteBoard, RenameBoard } from './board.dto';
var Objecttt = require('mongodb').ObjectID;

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async getBoard() {
    const board = await this.boardRepository.find();
    return { data: board };
  }
  async getOneBoard(boardId: string) {
    const board = await this.boardRepository.findOne({
      where: { _id: Objecttt(boardId) },
    });
    return { data: board };
  }

  async getUserBoard(userName: string) {
    const board = await this.boardRepository.find({
      where: { username: userName },
    });
    return { data: board };
  }

  async newBoard(newboard: CreateBoard) {
    let temp = await this.boardRepository.findOne({
      where: { username: newboard.username, name: newboard.name },
    });
    if (temp) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'BOARD ALREADY EXISTS',
        },
        HttpStatus.NOT_FOUND,
      );
      return;
    }
    const newl = await this.boardRepository.save(newboard);
    return { data: newl };
  }

  async deleteBoard(board: DeleteBoard) {
    let temp = await this.boardRepository.findOne({
      where: { _id: Objecttt(board.id) },
    });
    const del = await this.boardRepository.delete(temp);
    return { data: temp };
  }

  async renameBoard(board: RenameBoard) {
    let temp = await this.boardRepository.findOne({
      where: { _id: Objecttt(board.id) },
    });
    temp.name = board.newName;
    await this.boardRepository.update(temp._id.toString(), temp);
    return { data: temp };
  }
}
