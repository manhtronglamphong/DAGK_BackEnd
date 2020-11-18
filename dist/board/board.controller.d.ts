import { Board } from 'src/entities/board.entity';
import { CreateBoard, DeleteBoard, RenameBoard } from './board.dto';
import { BoardService } from './board.service';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    getBoard(): Promise<{
        data: Board[];
    }>;
    getOneBoard(boardId: string): Promise<{
        data: Board;
    }>;
    getUserBoard(username: string): Promise<{
        data: Board[];
    }>;
    newBoard(board: CreateBoard): Promise<{
        data: CreateBoard & Board;
    }>;
    deleteBoard(board: DeleteBoard): Promise<{
        data: Board;
    }>;
    renameBoard(board: RenameBoard): Promise<{
        data: Board;
    }>;
}
