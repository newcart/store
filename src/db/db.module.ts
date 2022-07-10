import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { DbEntity } from './entities/db.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DbEntity])],
    providers: [DbService],
    controllers: [],
    exports:[DbService]
})
export class DbModule {}
