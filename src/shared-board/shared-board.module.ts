import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedBoard } from 'src/entities/shared-board.entity';
import { SharedBoardController } from './shared-board.controller';
import { SharedBoardService } from './shared-board.service';

@Module({
  imports: [TypeOrmModule.forFeature([SharedBoard])],
  controllers: [SharedBoardController],
  providers: [SharedBoardService]
})
export class SharedBoardModule {}
