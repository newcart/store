import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from './db/db.module'
import { CityEntity } from './db/entities/city.entity'
import { StoreEntity } from './db/entities/store.entity'
import { CountryEntity } from './db/entities/country.entity'

@Module({
    imports: [
        DbModule,
        ConfigModule.forRoot({isGlobal:true}),
        TypeOrmModule.forRoot({
            type      : 'postgres',
            schema    : process.env.POSTGRES_SCHEMA,
            host      : process.env.POSTGRES_HOST,
            port      : parseInt(<string>process.env.POSTGRES_PORT),
            username  : process.env.POSTGRES_USER,
            password  : process.env.POSTGRES_PASSWORD,
            database  : process.env.POSTGRES_DATABASE,
            entities  : [CityEntity, StoreEntity, CountryEntity],
            autoLoadEntities: true,
            synchronize: true,
            retryDelay :1
        }),
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
})
export class AppModule {}
