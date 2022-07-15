import {IsNumber, IsString, IsDate, IsBoolean, IsInt} from 'class-validator';
import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class CreateUserRoleDto {
    @IsNumber()
    readonly user_role_id: number;
    @IsNumber()
    readonly user_type_id: number;
    @IsNumber()
    readonly service_id: number;
    @IsNumber()
    readonly code: string;
    @IsString()
    readonly name: string;
    @IsBoolean()
    readonly can_view: boolean;
    @IsBoolean()
    readonly can_update: boolean;
    @IsBoolean()
    readonly can_delete: boolean;
    @IsDate()
    readonly created_at: Date;
    @IsDate()
    readonly updated_at: Date;
    @IsBoolean()
    readonly status: boolean;
}

