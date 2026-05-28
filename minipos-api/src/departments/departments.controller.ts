import { Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete, HttpCode} from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {

    constructor(private readonly service: DepartmentsService) { }

    @Post()
    async create(@Body() body: { name: string }) {
        return this.service.create(body.name);
    }

    @Get()
    async findAll() {
        return this.service.findAll();
    }

    @Get(':id/courses')
    async findOneWithCourses(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.service.findOneWithCourses(id);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: { name: string }
    ) {
        return this.service.update(id, body);
    }

    @Delete(':id')
    async remove(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.service.remove(id);
    }
}