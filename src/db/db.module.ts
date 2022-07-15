import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { CityEntity } from './entities/city.entity';
import { CountryEntity } from './entities/country.entity';
import { ServiceEntity } from './entities/service.entity';
import { StoreEntity } from './entities/store.entity';
import { TownEntity } from './entities/town.entity';
import { UserEntity } from './entities/user.entity';
import { UserRoleEntity } from './entities/user-role.entity';
import { UserTypeEntity } from './entities/user-type.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CityEntity,
            CountryEntity,
            ServiceEntity,
            StoreEntity,
            TownEntity,
            UserEntity,
            UserRoleEntity,
            UserTypeEntity
        ])],
    providers: [DbService],
    controllers: [],
    exports:[DbService]
})
export class DbModule {}
