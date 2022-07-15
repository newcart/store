import {IsNumber, IsString, IsDate, IsBoolean, IsInt} from 'class-validator';
import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export class CreateUserDto {
    @IsNumber()
    readonly user_id: number;
    @IsNumber()
    readonly code: string;
    @IsString()
    readonly name: string;
    password: string;
    @IsString()
    firstname: string;
    @IsString()
    lastname: string;
    @IsString()
    email: string;
    @IsString()
    tc_kimlik: string;
    @IsString()
    gsm: string;
    @IsString()
    telephone: string;
    @IsString()
    api_key: string;
    @IsString()
    secret_key: string;
    @IsString()
    image: string;
    @IsNumber()
    address_id: number;
    @IsNumber()
    store_id: number;
    @IsNumber()
    user_type_id: number;
    @IsNumber()
    language_id: number;
    @IsString()
    last_ip: string;
    @IsDate()
    readonly created_at: Date;
    @IsDate()
    readonly updated_at: Date;
    @IsBoolean()
    readonly status: boolean;
}
