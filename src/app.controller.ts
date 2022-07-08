import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import {MessagePattern} from "@nestjs/microservices";

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

  @MessagePattern('create')
  create(request) {
    return this.dbService.create(request['body']);
  }
}
