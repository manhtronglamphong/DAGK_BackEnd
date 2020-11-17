import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';
import { ObjectID, Repository } from 'typeorm';
import { CreateBoard, RenameBoard } from './board.dto';

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
      where: { username: boardId },
    });
    console.log(board);
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

  async deleteBoard(board: CreateBoard) {
    let temp = await this.boardRepository.findOne({
      where: { username: board.username, name: board.name },
    });
    const del = await this.boardRepository.delete(temp);
    return { data: temp };
  }

  async renameBoard(board: RenameBoard) {
    let temp = await this.boardRepository.findOne({
      where: { username: board.username, name: board.name },
    });
    const update = await this.boardRepository.save({ name: board.newName });
    return { data: update };
  }
}
