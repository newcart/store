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

  @MessagePattern('list')
  list(request) {
    return this.dbService.list(request['body']);
  }
  @MessagePattern('info')
  info(request) {
    return this.dbService.info(request['body']);
  }
  @MessagePattern('save')
  save(request) {
    return this.dbService.save(request['body']);
  }
}
