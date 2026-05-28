import { Module } from '@nestjs/common';
import { PancocoController } from './pancoco.controller';
import { PancocoService } from './pancoco.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PancocoController],
  providers: [PancocoService, PrismaService] 
})
export class PancocoModule {}



