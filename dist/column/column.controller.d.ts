import { CreateColumn } from './column.dto';
import { ColumnService } from './column.service';
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    getBoard(): Promise<{
        data: import("../entities/column.entity").Columns[];
    }>;
    getOneColumn(columnId: string): Promise<{
        data: import("../entities/column.entity").Columns;
    }>;
    newColumn(column: CreateColumn): Promise<{
        data: CreateColumn & import("../entities/column.entity").Columns;
    }>;
}
