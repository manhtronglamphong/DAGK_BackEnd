import { Board } from 'src/entities/board.entity';
import { Repository } from 'typeorm';
import { CreateBoard } from './board.dto';
export declare class BoardService {
    private readonly boardRepository;
    constructor(boardRepository: Repository<Board>);
    getBoard(): Promise<{
        data: Board[];
    }>;
    getOneBoard(boardId: string): Promise<{
        data: Board;
    }>;
    getUserBoard(userName: string): Promise<{
        data: Board;
    }>;
    newBoard(newboard: CreateBoard): Promise<{
        data: CreateBoard & Board;
    }>;
}
