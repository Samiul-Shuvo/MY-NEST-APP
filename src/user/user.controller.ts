import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(){
        return 'User is found!!!1111';
        
    }
}
