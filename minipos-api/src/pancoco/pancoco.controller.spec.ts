import { Test, TestingModule } from '@nestjs/testing';
import { PancocoController } from './pancoco.controller';

describe('PancocoController', () => {
  let controller: PancocoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PancocoController],
    }).compile();

    controller = module.get<PancocoController>(PancocoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
