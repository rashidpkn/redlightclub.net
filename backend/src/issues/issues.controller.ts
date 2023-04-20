import { Body, Controller, Get, Post } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { Issues } from 'src/database/model/issues.entity';

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Post()
  create(
    @Body() body: any
  ){
      const {reportedby,username,phoneNumber,subject,description} = body
      Issues.create({reportedby,username,phoneNumber,subject,description})
      return true
  }

  @Get()
  async getAllIssues(){
    return await Issues.findAll()
  }

  @Post('vote')
  async vote(
    @Body() body :any
  ){
    const {id,response,username} = body
    const found = await Issues.findOne({where:{id}})
    const {vote} = found
   if (vote.find(e=>e.username===username)){
     return false
   }else{
    await Issues.update({vote:[...vote,{username,response}]},{where:{id}})
    return true
   }


  }

}
