import { SharedBoard } from 'src/entities/shared-board.entity';
import { Repository } from 'typeorm';
import { CreateSharedBoard } from './shared-board.dto';
export declare class SharedBoardService {
    private readonly sharedBoardRepository;
    constructor(sharedBoardRepository: Repository<SharedBoard>);
    getsharedBoard(): Promise<{
        data: SharedBoard[];
    }>;
    getOnesharedBoard(sharedBoardId: string): Promise<{
        data: SharedBoard;
    }>;
    newsharedBoard(newsharedBoard: CreateSharedBoard): Promise<{
        data: CreateSharedBoard & SharedBoard;
    }>;
}
