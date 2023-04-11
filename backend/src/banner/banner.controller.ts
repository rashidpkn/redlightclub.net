import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Banners } from 'src/database/model/banner.entity';
import { User } from 'src/database/model/user.entity';
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  async postBanner(
    @Body('username') username : string,
    @Body('url') url : string
  ){
      await Banners.create({username,url})
      return true
  }

  @Get()
  async getBanner(){
    return await Banners.findAll()
  }

  @Get('get-by-user')
  async getByUser(
    @Query('username') username : string
  ){
    return await Banners.findAll({where:{username}})
  }

  @Post('approve')
  async apporoveBanner(
    @Body('username') username : string,
    @Body('id') id : number,
    @Body('credit') credit : number
  ){
    await User.increment('credit',{by:credit,where:{username}})
    Banners.update({status:true,credit},{where:{id}})
    return true
  }

  @Post('refuse')
  refuseBanner(
    @Body('id') id : number
  ){
    Banners.update({status:true},{where:{id}})
    return false
  }

}
