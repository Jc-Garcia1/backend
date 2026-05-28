import {IsNotEmpty, IsString } from 'class-validator';

export class CreatePancocoDto {
    @IsString()
    @IsNotEmpty() name: string;
    @IsString()
    @IsNotEmpty() code: string;

}