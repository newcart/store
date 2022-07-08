import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DbEntity } from './entities/db.entity';
import { CreateDbDto } from './dto/create-db.dto';

@Injectable()
export class DbService {
    constructor(
        @InjectRepository(DbEntity)
        private dbRepository: Repository<DbEntity>,
    ) {}

    findAll() {
        //return this.usersRepository.find();
    }

    async create(user: CreateDbDto) {
        try {
            await  this.dbRepository.save(user);
        } catch (err) {
            console .log("Hata:" + err.message);
        } finally {
            console .log("finally");
        }
        return "Ok";
    }

    async findUserById (id: number): Promise<DbEntity>{
        const selectedUser: DbEntity = await this.dbRepository.findOne({where: {id},});
        return selectedUser;
    }

    async remove(id: number) {
        const user: DbEntity = await this.findUserById(id);
        if(user){
            this.dbRepository.delete(user.id);
        } else {

        }
    }
}
