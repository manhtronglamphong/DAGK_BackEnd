import { Test, TestingModule } from '@nestjs/testing';
import { SharedBoardController } from './shared-board.controller';

describe('SharedBoardController', () => {
  let controller: SharedBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedBoardController],
    }).compile();

    controller = module.get<SharedBoardController>(SharedBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
