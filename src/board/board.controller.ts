import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardPipe } from 'src/lib/ValidatePipe/createBoardPipe.class';
import { CreateBoard } from './board.dto';
import { BoardService } from './board.service';

@ApiTags('Board')
@Controller('board')
export class BoardController {
  constructor(
    @Inject(BoardService)
    private readonly boardService: BoardService,
  ) {}

  @Get('')
  async getBoard() {
    return await this.boardService.getBoard();
  }

  @Get(':boardId')
  async getOneBoard(@Param('boardId') boardId: string) {
    return await this.boardService.getOneBoard(boardId);
  }

  @Get('/boards/:username')
  async getUserBoard(@Param('username') username: string) {
    return await this.boardService.getUserBoard(username);
  }

  @Post('/newBoard')
  async newBoard(@Body(new CreateBoardPipe()) board: CreateBoard) {
    return await this.boardService.newBoard(board);
  }

  //   @Post('/updateBoard')
  //   async updateBoard(@Body() board: UpdateBoard) {
  //     return await this.boardService.updateBoard(board);
  //   }
}
