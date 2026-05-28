import { Test, TestingModule } from '@nestjs/testing';
import { PancocoService } from './pancoco.service';

describe('PancocoService', () => {
  let service: PancocoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PancocoService],
    }).compile();

    service = module.get<PancocoService>(PancocoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
