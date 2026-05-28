import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, HttpCode } from '@nestjs/common';
import { PancocoService } from './pancoco.service';
import { CreatePancocoDto } from './dto/create-pancoco.dto';
import { UpdatePancocoDto } from './dto/update-pancoco.dto';
import path from 'path';

@Controller('pancoco')
export class PancocoController {
    constructor(private readonly pancocoService: PancocoService) {}

    @Get()
    async list(){
        return this.pancocoService.findAll();
    }

    @Post()
    async create(@Body() dto: CreatePancocoDto){
        return this.pancocoService.create(dto);

    }

    @Get() 
    async findAll() { 
        return this.pancocoService.findAll(); 
    }

    @Get(':id') 
   async findOne(@Param('id', ParseIntPipe) id: number) { 
        return this.pancocoService.findOne(id); 
    }

    @Patch(':id') 
    async update( 
        @Param('id', ParseIntPipe) id: number, 
        @Body() dto: UpdatePancocoDto 
    ) { 
        return this.pancocoService.update(id, dto);
    }

    @Delete(':id') 
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number) { 
        this.pancocoService.remove(id); 
    }
}