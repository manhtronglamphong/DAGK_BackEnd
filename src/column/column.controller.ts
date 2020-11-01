import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateColumnPipe } from 'src/lib/ValidatePipe/createColumnPipe.class';
import { CreateColumn } from './column.dto';
import { ColumnService } from './column.service';

@ApiTags('Column')
@Controller('column')
export class ColumnController {

    constructor(
        @Inject(ColumnService)
        private readonly columnService: ColumnService,
    ) {}

    @Get('')
    async getBoard(){
        return await this.columnService.getColumn();
    }

    @Get(':columnId')
    async getOneColumn(@Param('columnId') columnId: string){
        return await this.columnService.getOneColumn(columnId);
    }

    @Post('/newColumn')
    async newColumn(@Body(new CreateColumnPipe) column: CreateColumn){
    return await this.columnService.newColumn(column);
    }

}
