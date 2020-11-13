import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { SharedBoardModule } from './shared-board/shared-board.module';
import { ColumnModule } from './column/column.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        'mongodb+srv://meo_lamphong:lamphong19@cluster0.j3ttt.mongodb.net/DAGK?retryWrites=true&w=majority',
      database: 'DAGK',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    BoardModule,
    UserModule,
    TagModule,
    SharedBoardModule,
    ColumnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
