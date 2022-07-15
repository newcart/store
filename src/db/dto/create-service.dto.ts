import {IsNumber, IsString, IsDate, IsBoolean, IsInt} from 'class-validator';
import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class CreateServiceDto {
    @IsNumber()
    readonly service_id: number;
    @IsString()
    readonly code: string;
    @IsString()
    readonly name: string;
    @IsDate()
    readonly created_at: Date;
    @IsDate()
    readonly updated_at: Date;
    @IsBoolean()
    readonly status: boolean;
}
