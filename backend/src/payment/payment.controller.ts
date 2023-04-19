import { Controller, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentHistory } from 'src/database/model/paymentHistory';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  async getAllPaymentHistory(
  ){
    return await PaymentHistory.findAll()
  }

  @Get('get-by-user')
  async geyByUsername(
    @Query() quary:any
  ){
    const {username} = quary
    return await PaymentHistory.findAll({where:{username}})
  }
  

}
