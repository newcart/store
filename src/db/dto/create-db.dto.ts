import {IsNumber, IsString, IsDate, IsBoolean, IsInt} from 'class-validator';
import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class CreateDbDto {
    @IsNumber()
    readonly store_id: number;
    @IsNumber()
    readonly store_code: number;
    @IsString()
    readonly store_name: string;
    @IsString()
    readonly address: string;
    @IsNumber()
    readonly town_id: number;
    @IsNumber()
    readonly city_id: number;
    @IsNumber()
    readonly country_id: number;
    @IsString()
    readonly tax_number: string;
    @IsString()
    readonly tax_office: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly mobile: string;
    @IsString()
    readonly telephone: string;
    @IsString()
    readonly image: string;
    @IsDate()
    readonly created_at: Date;
    @IsDate()
    readonly updated_at: Date;
    @IsBoolean()
    readonly status: boolean;
}
