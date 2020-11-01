import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSharedBoardPipe } from 'src/lib/ValidatePipe/CreateSharedBoardPipe.class';
import { CreateSharedBoard } from './shared-board.dto';
import { SharedBoardService } from './shared-board.service';

@ApiTags('Shared-Board')
@Controller('shared-board')
export class SharedBoardController {

    constructor(
        @Inject(SharedBoardService)
        private readonly sharedBoardService: SharedBoardService,
    ) {}

    @Get('')
    async getsharedBoard(){
        return await this.sharedBoardService.getsharedBoard();
    }

    @Get(':sharedBoardId')
    async getOneSharedBoard(@Param('sharedBoardId') sharedBoardId: string){
        return await this.sharedBoardService.getOnesharedBoard(sharedBoardId);
    }

    @Post('/newSharedBoard')
    async newSharedBoard(@Body(new CreateSharedBoardPipe) sharedBoard: CreateSharedBoard){
    return await this.sharedBoardService.newsharedBoard(sharedBoard);
    }

}
