import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Banners } from 'src/database/model/banner.entity';
import { User } from 'src/database/model/user.entity';
import { BannerService } from './banner.service';
import { Notification } from 'src/database/model/notification.entity';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  async postBanner(
    @Body('username') username : string,
    @Body('url') url : string
  ){
    await Notification.create({message:`${username} is send a banner link`,role:'admin',type:'banner'})
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

    const { referredby}: any = await User.findOne({ where: { username } })

    console.log(credit);

    if(referredby){
      const { referredto}: any = await User.findOne({ where: { username:referredby } })
      const ref = referredto.map((e: { username: any; amount: number; }) => {
        e.username === username && e.amount? e.amount  = e.amount  + credit*20/100  :  e.amount = credit*20/100
        return e
      })

        User.update({         
          referredto:ref
      } , {where:{username:referredby}})

      await User.increment('credit',{by:credit*20/100,where:{username:referredby}})
    }



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
