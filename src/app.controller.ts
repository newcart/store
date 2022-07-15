import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { MessagePattern } from "@nestjs/microservices";


@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly dbService: DbService
  ) {}

  /**
   * Store servisini kontrol için bir get isteği endpointi
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /**
   * store microservis test isteği endpointi
   */
  @MessagePattern('serviceTest')
  serviceTest( request ) {
    return this.appService.serviceTest( request );
  }

  /**
   * Store yönlendirme
   */
  @MessagePattern('city/list')
  cityList(request) {
    return this.dbService.cityList(request['body']);
  }
  @MessagePattern('city/info')
  cityInfo(request) {
    return this.dbService.cityInfo(request['body']);
  }
  @MessagePattern('city/save')
  citySave(request) {
    return this.dbService.citySave(request['body']);
  }
  @MessagePattern('city/remove')
  cityRemove(request) {
    return this.dbService.cityRemove(request['body']);
  }

  /**
   * Country yönlendirme
   */
  @MessagePattern('country/list')
  countryList(request) {
    return this.dbService.countryList(request['body']);
  }
  @MessagePattern('country/info')
  countryInfo(request) {
    return this.dbService.countryInfo(request['body']);
  }
  @MessagePattern('country/save')
  countrySave(request) {
    return this.dbService.countrySave(request['body']);
  }
  @MessagePattern('country/remove')
  countryRemove(request) {
    return this.dbService.countryRemove(request['body']);
  }

  /**
   * MicroServices yönlendirme
   */
  @MessagePattern('service/list')
  serviceList(request) {
    return this.dbService.serviceList(request['body']);
  }
  @MessagePattern('service/info')
  serviceInfo(request) {
    return this.dbService.serviceInfo(request['body']);
  }
  @MessagePattern('service/save')
  serviceSave(request) {
    return this.dbService.serviceSave(request['body']);
  }
  @MessagePattern('service/remove')
  serviceRemove(request) {
    return this.dbService.serviceRemove(request['body']);
  }

  /**
   * Store yönlendirme
   */
  @MessagePattern('store/setup')
  storeSetup(request) {
    return this.dbService.storeSetup();
  }
  @MessagePattern('store/list')
  storeList(request) {
    return this.dbService.storeList(request['body']);
  }
  @MessagePattern('store/info')
  storeInfo(request) {
    return this.dbService.storeInfo(request['body']);
  }
  @MessagePattern('store/save')
  storeSave(request) {
    return this.dbService.storeSave(request['body']);
  }
  @MessagePattern('store/remove')
  storeRemove(request) {
    return this.dbService.storeRemove(request['body']);
  }

  /**
   * Town yönlendirme
   */
  @MessagePattern('town/list')
  townList(request) {
    return this.dbService.townList(request['body']);
  }
  @MessagePattern('town/info')
  townInfo(request) {
    return this.dbService.townInfo(request['body']);
  }
  @MessagePattern('town/save')
  townSave(request) {
    return this.dbService.townSave(request['body']);
  }
  @MessagePattern('town/remove')
  townRemove(request) {
    return this.dbService.townRemove(request['body']);
  }

  /**
   * User yönlendirme
   */
  @MessagePattern('user/list')
  userList(request) {
    return this.dbService.userList(request['body']);
  }
  @MessagePattern('user/info')
  userInfo(request) {
    return this.dbService.userInfo(request['body']);
  }
  @MessagePattern('user/save')
  userSave(request) {
    return this.dbService.userSave(request['body']);
  }
  @MessagePattern('user/remove')
  userRemove(request) {
    return this.dbService.userRemove(request['body']);
  }

  /**
   * UserRole yönlendirme
   */
  @MessagePattern('user-role/list')
  userRoleList(request) {
    return this.dbService.userRoleList(request['body']);
  }
  @MessagePattern('user-role/info')
  userRoleInfo(request) {
    return this.dbService.userRoleInfo(request['body']);
  }
  @MessagePattern('user-role/save')
  userRoleSave(request) {
    return this.dbService.userRoleSave(request['body']);
  }
  @MessagePattern('user-role/remove')
  userRoleRemove(request) {
    return this.dbService.userRoleRemove(request['body']);
  }

  /**
   *  userType yönlendirme
   */
  @MessagePattern('user-type/list')
  userTypeList(request) {
    return this.dbService.userTypeList(request['body']);
  }
  @MessagePattern('user-type/info')
  userTypeInfo(request) {
    return this.dbService.userTypeInfo(request['body']);
  }
  @MessagePattern('user-type/save')
  userTypeSave(request) {
    return this.dbService.userTypeSave(request['body']);
  }
  @MessagePattern('user-type/remove')
  userTypeRemove(request) {
    return this.dbService.userTypeRemove(request['body']);
  }
}
