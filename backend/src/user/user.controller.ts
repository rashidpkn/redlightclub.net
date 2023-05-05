import { Controller, Post, Body, Get, Req, Query } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';
import { UserService } from './user.service';
import { PaymentHistory } from 'src/database/model/paymentHistory';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/signup')
  create(
    @Body() body: any
  ) {
    const { username, email, password, role, referredby } = body
    return this.userService.create(username, email, password, role, referredby)
  }

  @Post('/signin')
  login(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.userService.login(email, password)
  }

  @Post('/delete')
  delete() {
    return this.userService.delete()
  }

  @Post('/verify')
  Verify() {
    return this.userService.verify()
  }

  @Get('')
  getAllUsers() {
    return User.findAll()
  }

  @Get('get-a-user')
  async getAUser(
    @Query() query: any
  ) {

    const { username }: any = query

    return await User.findOne({ where: { username } })
  }

  @Post('clear-due')
  async clearDue(
    @Body() body: any
  ) {
    const { username } = body

    const { dueAmount, referredby}: any = await User.findOne({ where: { username } })

    
    if(referredby){
      const { credit,referredto}: any = await User.findOne({ where: { username:referredby } })
      const ref = referredto.map((e: { username: any; amount: number; }) => {
        
        if(e.username === username){
          e.amount?e.amount  = e.amount  + dueAmount*20/100  :  e.amount = dueAmount*20/100
        }
        return e
      })
      
      
        User.update({ 
          credit:credit + dueAmount*20/100 ,          
          referredto: ref
      } , {where:{username:referredby}})
    }
    const update = await User.update({ due: false, dueAmount: 0 }, { where: { username } })

    await PaymentHistory.update({ status: 'paid' }, { where: { username } })
    return true
  }

}

