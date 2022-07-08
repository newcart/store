import { IsNumber, IsString } from 'class-validator';

export class CreateDbDto {
    @IsString()
    readonly name: string;
    @IsNumber()
    readonly age: number;
    @IsNumber()
    readonly store: number;
    @IsString()
    readonly email: string;
}
