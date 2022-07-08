import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  async serviceTest(request): Promise<any> {
    return "Store Service is runing. Message From service via TCP method.";
  }

  async create(id: string): Promise<any> {
    return "create";
  }

}
