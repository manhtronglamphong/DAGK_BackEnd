import { CreateBoard } from './board.dto';
import { BoardService } from './board.service';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    getBoard(): Promise<{
        data: import("../entities/board.entity").Board[];
    }>;
    getOneBoard(boardId: string): Promise<{
        data: import("../entities/board.entity").Board;
    }>;
    getUserBoard(username: string): Promise<{
        data: import("../entities/board.entity").Board;
    }>;
    newBoard(board: CreateBoard): Promise<{
        data: CreateBoard & import("../entities/board.entity").Board;
    }>;
}
