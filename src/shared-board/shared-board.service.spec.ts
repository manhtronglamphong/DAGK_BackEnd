import { Test, TestingModule } from '@nestjs/testing';
import { SharedBoardService } from './shared-board.service';

describe('SharedBoardService', () => {
  let service: SharedBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedBoardService],
    }).compile();

    service = module.get<SharedBoardService>(SharedBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
