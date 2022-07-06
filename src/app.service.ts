import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async serviceTest(body): Promise<any> {
    return "Store Service is runing. Message From service via TCP method.";
  }

}
