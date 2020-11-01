import { Columns } from 'src/entities/column.entity';
import { Repository } from 'typeorm';
import { CreateColumn } from './column.dto';
export declare class ColumnService {
    private readonly columnRepository;
    constructor(columnRepository: Repository<Columns>);
    getColumn(): Promise<{
        data: Columns[];
    }>;
    getOneColumn(columnId: string): Promise<{
        data: Columns;
    }>;
    newColumn(newcolumn: CreateColumn): Promise<{
        data: CreateColumn & Columns;
    }>;
}
