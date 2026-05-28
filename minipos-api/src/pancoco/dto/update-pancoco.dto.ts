import { PartialType } from '@nestjs/mapped-types';
import { CreatePancocoDto } from './create-pancoco.dto';

export class UpdatePancocoDto extends PartialType(CreatePancocoDto) { }