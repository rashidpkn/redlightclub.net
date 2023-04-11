import { Notification } from 'src/database/model/notification.entity';
import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getAdminNotification(): Promise<Notification[]>;
    deleteMessage(id: any): Promise<boolean>;
}
