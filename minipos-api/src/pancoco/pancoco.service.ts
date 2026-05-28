import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePancocoDto } from './dto/create-pancoco.dto';
import { UpdatePancocoDto } from './dto/update-pancoco.dto';
import { Pancoco } from './entities/pancoco.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PancocoService {

    constructor(private readonly prisma: PrismaService) {}

    private pancoco: Pancoco[] = [];
    private nextId = 1;

    async create(dto: CreatePancocoDto) {
        return this.prisma.pancoco.create({
            data: {
                name: dto.name,
                code: dto.code,
            },
        });
    }    
   
    async findAll() {
        return this.prisma.pancoco.findMany({
            orderBy: { id: 'asc'},
        });
    }

    async findOne(id: number) {
        const pancoco = await this.prisma.pancoco.findUnique({ where: { id } });
        if (!pancoco) throw new NotFoundException(`Pancoco ${id} no existe`);
        return pancoco;
    }

    async update(id: number, dto: UpdatePancocoDto) {
        await this.findOne(id); // asegura 404 si no existe 
        return this.prisma.pancoco.update({ 
            where: { id }, 
            data: dto, 
        });
    }

    async remove(id: number) { 
        await this.findOne(id); 
        await this.prisma.pancoco.delete({ where: { id } }); 
    }
}



