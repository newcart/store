import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DbEntity } from './entities/db.entity';
import { CreateDbDto } from './dto/create-db.dto';
import { newCartUtil } from "newcart/util";

@Injectable()
export class DbService {
    constructor(
        @InjectRepository(DbEntity)
        private dbRepository: Repository<DbEntity>,
    ) {}

    async create(store: CreateDbDto) {
        var status = 'failure';
        var message = '';
        try {
            store =await  this.dbRepository.save(store)
            if(store){
                status = 'success';
                message = 'Mağaza Eklendi';
            }
        } catch (err) {
            console .log("Hata:" + err.message)
            message = 'Hata: '+ err.message;
        } finally {
            //console .log("finally")
        }
        return newCartUtil.response(status, message,  store)
    }

    async findStoreById (id: number): Promise<DbEntity>{
        const selectedStore: DbEntity = await this.dbRepository.findOne({where: {id}})
        return selectedStore
    }

    async remove(id: number) {
        const store: DbEntity = await this.findStoreById(id);
        if(store){
            this.dbRepository.delete(store.id);
        } else {

        }
    }
}
