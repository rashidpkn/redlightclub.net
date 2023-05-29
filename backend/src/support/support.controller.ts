import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SupportService } from './support.service';
import { Supports } from 'src/database/model/support.entity';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Post()
  async createTicket(
    @Body() body :any
  ){
    const {username,email,type,subject,detail,images} = body
    await Supports.create({username,email,type,subject,detail,images})
    return true
  }

  @Get()
  async getTickets(){
    return await Supports.findAll()
  }

  @Get('get-by-user')
  async getByUser(
    @Query('username') username : string
  ){
    return await Supports.findAll({where:{username}})
  }

  @Post('response')
  async Response(
    @Body() body :any
  ){
    const {id,response} = body
    console.log(body);
    await Supports.update({response},{where:{id}})
    return true
  }

  @Post('close')
  async Close(
    @Body() body:any
  ){
    const {id} = body
    await Supports.update({status:true},{where:{id}})
    return true
  }
}
