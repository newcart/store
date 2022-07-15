import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { CountryEntity } from './entities/country.entity';
import { StoreEntity } from './entities/store.entity';
import { TownEntity } from './entities/town.entity';
import { UserEntity } from './entities/user.entity';
import { UserRoleEntity } from './entities/user-role.entity';
import { UserTypeEntity } from './entities/user-type.entity';
import { ServiceEntity } from './entities/service.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { CreateCountryDto } from './dto/create-country.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { CreateStoreDto } from './dto/create-store.dto';
import { CreateTownDto } from './dto/create-town.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { newCartUtil } from "newcart/util";
import { newCartSetup } from "newcart/setup";


@Injectable()
export class DbService {
    constructor(
        @InjectRepository(CityEntity)
        private cityRepository: Repository<CityEntity>,
        @InjectRepository(StoreEntity)
        private storeRepository: Repository<StoreEntity>,
        @InjectRepository(CountryEntity)
        private countryRepository: Repository<CountryEntity>,
        @InjectRepository(ServiceEntity)
        private serviceRepository: Repository<ServiceEntity>,
        @InjectRepository(TownEntity)
        private townRepository: Repository<TownEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        @InjectRepository(UserRoleEntity)
        private userRoleRepository: Repository<UserRoleEntity>,
        @InjectRepository(UserTypeEntity)
        private userTypeRepository: Repository<UserTypeEntity>,

    ) {}

    /**
     * City İşlemleri
     */
    async findCityById (city_id: number): Promise<CityEntity>{
        const selectedItem: CityEntity = await this.cityRepository.findOne({where: {city_id}})
        return selectedItem
    }
    async cityInfo(data){
        const id = data['city_id']
        const selectedItem = await this.findCityById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async cityList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.cityRepository.findAndCount({
            order: {
                city_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async citySave(city: CreateCityDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = city.city_id
            city = await this.cityRepository.save(city)
            if(city){
                status = 'success';
                if(old_item_id==city.city_id){
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
        return newCartUtil.response(status, message,  city)
    }
    async cityRemove(data) {
        const id = data['city_id']
        const city: CityEntity = await this.findCityById(id);
        if(city){
            this.cityRepository.delete(city.city_id);
            return newCartUtil.response('success', 'Silindi',  city)
        } else {
            return newCartUtil.response('failure', 'City Bulunamdı',  {})
        }
    }

    /**
     * Country işlemleri
     */
    async findCountryById (country_id: number): Promise<CountryEntity>{
        const selectedItem: CountryEntity = await this.countryRepository.findOne({where: {country_id}})
        return selectedItem
    }
    async countryInfo(data){
        const id = data['country_id']
        const selectedItem = await this.findCountryById(id)
        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Ülke Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async countryList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.countryRepository.findAndCount({
            order: {
                country_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async countrySave(country: CreateCountryDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = country.country_id
            country = await this.countryRepository.save(country)
            if(country){
                status = 'success';
                if(old_item_id==country.country_id){
                    message = 'Ülke Güncellendi';
                } else {
                    message = 'Ülke Eklendi';
                }
            }
        } catch (err) {
            console .log("Hata:" + err.message)
            message = 'Hata: '+ err.message;
        } finally {
            //console .log("finally")
        }
        return newCartUtil.response(status, message,  country)
    }
    async countryRemove(data) {
        const id = data['country_id']
        const country: CountryEntity = await this.findCountryById(id);
        if(country){
            this.countryRepository.delete(country.country_id);
            return newCartUtil.response('success', 'Silindi',  country)
        } else {
            return newCartUtil.response('failure', 'Country Bulunamdı',  {})
        }
    }

    /**
     * MicroService işlemleri
     */
    async findServiceById (service_id: number): Promise<ServiceEntity>{
        const selectedItem: ServiceEntity = await this.serviceRepository.findOne({where: {service_id}})
        return selectedItem
    }
    async serviceInfo(data){
        const id = data['service_id']
        const selectedItem = await this.findServiceById(id)
        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Ülke Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async serviceList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.serviceRepository.findAndCount({
            order: {
                service_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async serviceSave(service: CreateServiceDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = service.service_id
            service = await this.serviceRepository.save(service)
            if(service){
                status = 'success';
                if(old_item_id==service.service_id){
                    message = 'Ülke Güncellendi';
                } else {
                    message = 'Ülke Eklendi';
                }
            }
        } catch (err) {
            console .log("Hata:" + err.message)
            message = 'Hata: '+ err.message;
        } finally {
            //console .log("finally")
        }
        return newCartUtil.response(status, message,  service)
    }
    async serviceRemove(data) {
        const id = data['service_id']
        const service: ServiceEntity = await this.findServiceById(id);
        if(service){
            this.serviceRepository.delete(service.service_id);
            return newCartUtil.response('success', 'Silindi',  service)
        } else {
            return newCartUtil.response('failure', 'Service Bulunamdı',  {})
        }
    }

    /**
     * Store İşlemleri
     */
    async storeSetup(){
        const countries = newCartSetup.getCountries()
        const cities =  newCartSetup.getCities()
        const towns =  newCartSetup.getTowns()
        for (let coi = 0; coi < countries.length; coi++) {
            const country = <CountryEntity>countries[coi];
            const response = await this.countrySave(country);
            const saved_country = response.data
            if(saved_country.country_id){
                console.log( `*${saved_country.name} Eklendi`)
                for (let cii = 0; cii < cities.length; cii++) {
                    const city = <CityEntity>cities[cii];
                    if(saved_country.code == city['country']){
                        city.country_id = saved_country.country_id
                        const response = await this.citySave(city);
                        const saved_city = response.data
                        if(saved_city.city_id){
                            console.log( ` -${saved_country.name}, ${city.name} Eklendi` )
                            for (let toi = 0; toi < cities.length; toi++) {
                                const town = <TownEntity>towns[toi];
                                if( saved_city.code == town['city']){
                                    town.city_id = saved_city.city_id
                                    const response = await this.townSave(town);
                                    const saved_town = response.data
                                    if(saved_town.town_id){
                                        console.log( `  ${saved_country.name}, ${saved_city.name} ${town.name} Eklendi` )
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return newCartUtil.response('success', 'Veri Tabanı Hazırlandı',  {})
    }
    async findStoreById (store_id: number): Promise<StoreEntity>{
        const selectedItem: StoreEntity = await this.storeRepository.findOne({where: {store_id}})
        return selectedItem
    }
    async storeInfo(data){
        const id = data['store_id']
        const selectedItem = await this.findStoreById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async storeList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.storeRepository.findAndCount({
            order: {
                store_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async storeSave(store: CreateStoreDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = store.store_id
            store = await this.storeRepository.save(store)
            if(store){
                status = 'success';
                if(old_item_id==store.store_id){
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
    async storeRemove(data) {
        const id = data['store_id']
        const store: StoreEntity = await this.findStoreById(id);
        console.log(id, store);
        if(store){
            this.storeRepository.delete(store.store_id);
            return newCartUtil.response('success', 'Silindi',  store)
        } else {
            return newCartUtil.response('failure', 'Store Bulunamdı',  {})
        }
    }

    /**
     * Town İşlemleri
     */
    async findTownById (town_id: number): Promise<TownEntity>{
        const selectedItem: TownEntity = await this.townRepository.findOne({where: {town_id}})
        return selectedItem
    }
    async townInfo(data){
        const id = data['town_id']
        const selectedItem = await this.findTownById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async townList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.townRepository.findAndCount({
            order: {
                town_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async townSave(town: CreateTownDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = town.town_id
            town = await this.townRepository.save(town)
            if(town){
                status = 'success';
                if(old_item_id==town.town_id){
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
        return newCartUtil.response(status, message,  town)
    }
    async townRemove(data) {
        const id = data['town_id']
        const town: TownEntity = await this.findTownById(id);
        if(town){
            this.townRepository.delete(town.town_id);
            return newCartUtil.response('success', 'Silindi',  town)
        } else {
            return newCartUtil.response('failure', 'Town Bulunamdı',  {})
        }
    }

    /**
     * User İşlemleri
     */
    async findUserById (user_id: number): Promise<UserEntity>{
        const selectedItem: UserEntity = await this.userRepository.findOne({where: {user_id}})
        return selectedItem
    }
    async userInfo(data){
        const id = data['user_id']
        const selectedItem = await this.findUserById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async userList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.userRepository.findAndCount({
            order: {
                user_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async userSave(user: CreateUserDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = user.user_id
            user = await this.userRepository.save(user)
            if(user){
                status = 'success';
                if(old_item_id==user.user_id){
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
        return newCartUtil.response(status, message,  user)
    }
    async userRemove(data) {
        const id = data['user_id']
        const user: UserEntity = await this.findUserById(id);
        if(user){
            this.userRepository.delete(user.user_id);
            return newCartUtil.response('success', 'Silindi',  user)
        } else {
            return newCartUtil.response('failure', 'User Bulunamdı',  {})
        }
    }

    /**
     * UserRole İşlemleri
     */
    async findUserRoleById (user_role_id: number): Promise<UserRoleEntity>{
        const selectedItem: UserRoleEntity = await this.userRoleRepository.findOne({where: {user_role_id}})
        return selectedItem
    }
    async userRoleInfo(data){
        const id = data['user_role_id']
        const selectedItem = await this.findUserRoleById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async userRoleList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.userRoleRepository.findAndCount({
            order: {
                user_role_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async userRoleSave(user_role: CreateUserRoleDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = user_role.user_role_id
            user_role = await this.userRoleRepository.save(user_role)
            if(user_role){
                status = 'success';
                if(old_item_id==user_role.user_role_id){
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
        return newCartUtil.response(status, message,  user_role)
    }
    async userRoleRemove(data) {
        const id = data['user_role_id']
        const user_role: UserRoleEntity = await this.findUserRoleById(id);
        if(user_role){
            this.userRoleRepository.delete(user_role.user_role_id);
            return newCartUtil.response('success', 'Silindi',  user_role)
        } else {
            return newCartUtil.response('failure', 'User Role Bulunamdı',  {})
        }
    }

    /**
     * UserRole İşlemleri
     */
    async findUserTypeById (user_type_id: number): Promise<UserTypeEntity>{
        const selectedItem: UserTypeEntity = await this.userTypeRepository.findOne({where: {user_type_id}})
        return selectedItem
    }
    async userTypeInfo(data){
        const id = data['user_type_id']
        const selectedItem = await this.findUserTypeById (id)

        var message = '';
        if(selectedItem){
            message = 'Başarılı'
        } else {
            message = 'Mağaza Bulunamadı'
        }
        return newCartUtil.response('success', message,  selectedItem)
    }
    async userTypeList (data){
        const page = data['page']
        const limit = data['limit']
        const offset = Math.max(0, page-1) * limit
        const [items, count] = await this.userTypeRepository.findAndCount({
            order: {
                user_type_id: 'ASC'
            },
            skip: offset,
            take: limit
        });
        return newCartUtil.response('success', 'Başarılı',  {items, count})
    }
    async userTypeSave(user_type: CreateUserTypeDto) {
        var status = 'failure';
        var message = '';
        try {
            const old_item_id = user_type.user_type_id
            user_type = await this.userTypeRepository.save(user_type)
            if(user_type){
                status = 'success';
                if(old_item_id==user_type.user_type_id){
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
        return newCartUtil.response(status, message,  user_type)
    }
    async userTypeRemove(data) {
        const id = data['user_type_id']
        const user_type: UserTypeEntity = await this.findUserTypeById(id);
        if(user_type){
            this.userTypeRepository.delete(user_type.user_type_id);
            return newCartUtil.response('success', 'Silindi',  user_type)
        } else {
            return newCartUtil.response('failure', 'User Type Bulunamdı',  {})
        }
    }

}
