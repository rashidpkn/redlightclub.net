import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { Bid } from 'src/database/model/bid.entity';
import { BidService } from './bid.service';

@Controller('bid')
export class BidController {
  constructor(private readonly bidService: BidService) { }

  @Post()
  async create(
    @Body() body: any
  ) {
    
    const { tier, position } = body

    try {
      if (tier && position <= 6) {
        // const found = await Bid.findOne({ where: { tier, position } })
        // if (found) {
          await Bid.update({ bid: null, largestBidAmount: 50, status: "open" }, { where: { position, tier } })
          return {
            status: true,
            message: "Position opened"
          }
        // }
        // else {
        //   await Bid.create({ tier, position })
        //   return true
        // }
      } 
      else {
        throw new HttpException("UNPROCESSABLE_ENTITY", HttpStatus.UNPROCESSABLE_ENTITY)
      }
    } catch (error) {
      console.log(error.message);
      return error
    }
  }

  @Get()
  async get() {
    return await Bid.findAll({ order: ['position'] })
  }

  @Post('auction')
  async auction(
    @Body() body: any
  ) {
    const { amount, username, bid, id, largestBidAmount } = body
    try {
      if (bid) {
        if (largestBidAmount < amount) {
          await Bid.update({
            bid: [...bid, { amount, username }],
            largestBidAmount: amount,
          },
            { where: { id } })
            return {
              status:true,
              reason:"Biding is Successfull"
            }
        } 
        else {
            return{
              status : false,
              reason:"Biding is not successful ,Beacuse amount must be greater than largest amount"
            }
        }

      } else {
        await Bid.update({
          bid: [{ amount, username }],
          largestBidAmount: amount,
        },
          { where: { id } })
      }
      return {
        status: true,
        reason:"Biding is Successfull"
        }
    } catch (error) {
      console.log(error.message);
      return { status:false,reason:error.message}
    }

  }


  @Post('close')
  closeBid(
    @Body() body:any
  ){
      const {id,bid,largestBidAmount,position,tier} = body
      // const  {username} =  bid.find((e: { amount: any; })=> e.amount===largestBidAmount)
      // Ads.update({tier},{where:{adsTitle}})
      Bid.update({status:'close'},{where:{position,tier}})
      return true
  }


  @Post('renew')
  renew(){
    Ads.update({tier:'none'},{where:{}}),
    Bid.update({status:'close',bid:null,largestBidAmount:50,baseAmount:50},{where:{}})
    return true;
  }


}
