import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { Delete, Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Headers, Query, Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { Ads } from 'src/database/model/ads.entity';
import { Notification } from 'src/database/model/notification.entity';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) { }

  @Post('create')
  async create(
    @Body('ads') ads: any,
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('region') region : string
  ) {
    await Notification.create({message:`${ads.adsTitle} New Profile is created`,role:'admin',type:'newProfile'})
    return this.adsService.create(ads, username, email,region)
  }

  @Get('get-all-ads')
  getAllAds(
  ) {
    return Ads.findAll()
  }

  @Get('get-user-ads')
  getUserAds(
    @Query('username') username: string
  ) {
    return Ads.findAll({ where: { username } })
  }

  @Get('get-a-ads')
  getAAds(
    @Query('adsTitle') adsTitle: string
  ) {
    Ads.increment('view', { by: 1, where: { adsTitle } },)
    return Ads.findOne({ where: { adsTitle } })
  }

  @Get('get-by-id')
  async getById(
    @Query('id') id: number
  ) {
    try {
      if(!isNaN(id)){

        await Ads.increment('view', { by: 1, where: { id } },)
        return await Ads.findOne({ where: { id } })
      }
      else throw new HttpException('UNPROCESSABLE_ENTITY',HttpStatus.UNPROCESSABLE_ENTITY)
      
    } catch (error) {
      throw new HttpException('UNPROCESSABLE_ENTITY',HttpStatus.UNPROCESSABLE_ENTITY)
    }
    
  }

  @Post('delete')
  delete(
    @Body('id') id: number
  ) {
    Ads.destroy({ where: { id } })
    return {
      status: true,
      reason: 'Ads is Deleted'
    }
  }

  @Post('block')
  block(
    @Body('id') id: string
  ) {
    Ads.update({ visibility: false }, { where: { id } })
    return {
      status: true,
      reason: 'Ads is Blocked'
    }
  }

  @Post('unblock')
  unBlock(
    @Body('id') id: string
  ) {
    Ads.update({ visibility: true }, { where: { id } })
    return {
      status: true,
      reason: 'Ads is UnBlocked'
    }
  }

  @Post('vacation')
  async vacation(
    @Body('id') id:number,
    @Body('vacation') vacation:boolean
  ){
    await Ads.update({vacation},{where:{id}})
    return {
      status: true,
      reason: 'Vacation Updated'
    }
  }

  @Post('write-review')
  async writeReview(
    @Body('id') id:number,
    @Body('username') username:string,
    @Body('rating') rating:number,
    @Body('title') title:string,
    @Body('desc') desc : string
  ){
    return this.adsService.writeReview(id,username,rating,title,desc)
  }

  @Post('ask-question')
  async askQuestion(
    @Body('id') id:number,
    @Body('username') username:string,
    @Body('question') question:string,
  ){
    const found = await Ads.findOne({where:{id}})
    if(found){
      await Ads.update({qna:[...found.qna,{username,question}]},{where:{id}})
    }
    return true
  }

  @Post('edit')
  async edit(@Body() body :any){
    
      const {id,edit} = body

      try {
        
        await Ads.update({...edit} , {where:{id}})
        return true
      } catch (error) {
        console.log(error.message);
        return false
      }

  }

}
