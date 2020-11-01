import { CreateSharedBoard } from './shared-board.dto';
import { SharedBoardService } from './shared-board.service';
export declare class SharedBoardController {
    private readonly sharedBoardService;
    constructor(sharedBoardService: SharedBoardService);
    getsharedBoard(): Promise<{
        data: import("../entities/shared-board.entity").SharedBoard[];
    }>;
    getOneSharedBoard(sharedBoardId: string): Promise<{
        data: import("../entities/shared-board.entity").SharedBoard;
    }>;
    newSharedBoard(sharedBoard: CreateSharedBoard): Promise<{
        data: CreateSharedBoard & import("../entities/shared-board.entity").SharedBoard;
    }>;
}
