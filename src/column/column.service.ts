import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Columns } from 'src/entities/column.entity';
import { Repository } from 'typeorm';
import { CreateColumn } from './column.dto';

@Injectable()
export class ColumnService {
    constructor(
        @InjectRepository(Columns)
        private readonly columnRepository: Repository<Columns>,
      ) {}

    async getColumn(){
        const column = await this.columnRepository.find();
        return {data: column};
    }

    async getOneColumn(columnId:string){
        const column = await this.columnRepository.findOne({where :{id:columnId}});
        console.log(column);
        return {data: column};
    }

    async newColumn(newcolumn:CreateColumn){
        const newl = await this.columnRepository.save(newcolumn);
        return {data: newl};
      }

}
