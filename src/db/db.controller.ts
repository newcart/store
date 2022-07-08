import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { DbService } from './db.service';
import { CreateDbDto } from './dto/create-db.dto';

@Controller('user')
export class DbController {
    constructor(private readonly usersService: DbService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    /*
    create(@Req() request: Request) {

        const user = new User
        user.firstName = request.body['firstName']
        user.lastName= request.body['lastName']
        console.log(user)
        return this.usersService.create(user);
    }
*/


}
