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

    async findStoreById (store_id: number): Promise<DbEntity>{
        const selectedStore: DbEntity = await this.dbRepository.findOne({where: {store_id}})
        return selectedStore
    }

    async info(data){
        const id = data['store_id']
        const store = await this.findStoreById (id)

        var message = '';
        if(store){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  store)
    }
    async list (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.dbRepository.findAndCount({
            order: {
                store_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }

    async save(store: CreateDbDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_store_id = store.store_id
            store = await this.dbRepository.save(store)
            if(store){
                status = 'success';
                if(old_store_id==store.store_id){
                    message = 'Mağaza Güncellendi';
                } else {
                    message = 'Mağaza Eklendi';
                }
            }
        } catch (err) {
            console .log("Hata:" + err.message)
            message = 'Hata: '+ err.message;
        } finally {
            //console .log("finally")
        }
        return newCartUtil.response(status, message,  store)
    }
    async remove(id: number) {
        const store: DbEntity = await this.findStoreById(id);
        if(store){
            this.dbRepository.delete(store.store_id);
        } else {

        }
    }
}
