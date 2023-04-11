import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Notification } from 'src/database/model/notification.entity';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('admin')
  async getAdminNotification(){
    return await Notification.findAll({where:{role:'admin'}})
  }

  @Post('delete')
  async deleteMessage(
    @Body('id') id :any
  ){
    await Notification.destroy({where:{id}})
    return true
  }

}
