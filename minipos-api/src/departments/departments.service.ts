import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentsService {
    constructor(private readonly prisma: PrismaService) { }

    async create(name: string) {
        return this.prisma.department.create({
            data: { name },
        });
    }

    async findAll() {
        return this.prisma.department.findMany({
            orderBy: { id: 'asc' },
        });
    }

    async findOne(id: number) {
        const department = await this.prisma.department.findUnique({
            where: { id },
        });

        if (!department) {
            throw new NotFoundException(`Department ${id} no existe`);
        }

        return department;
    }

    async findOneWithCourses(id: number) {
        const dept = await this.prisma.department.findUnique({
            where: { id },
            include: {
                courses: {
                    orderBy: { id: 'asc' },
                },
            },
        });

        if (!dept) {
            throw new NotFoundException(`Department ${id} no existe`);
        }

        return dept;
    }

    async update(id: number, body: { name: string }) {
        await this.findOne(id);

        return this.prisma.department.update({
            where: { id },
            data: {
                name: body.name,
            },
        });
    }

    async remove(id: number) {
        await this.findOne(id);

        await this.prisma.department.delete({
            where: { id },
        });
    }
}