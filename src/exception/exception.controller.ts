/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionsFilter } from 'src/filters/http-exceptions/http-exceptions.filter';

@Controller('exception')
@UseFilters(HttpExceptionsFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id',ParseIntPipe) id:number){
        return {message : `Your id is : ${id}`}
    }
}
