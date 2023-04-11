import { SupportService } from './support.service';
import { Supports } from 'src/database/model/support.entity';
export declare class SupportController {
    private readonly supportService;
    constructor(supportService: SupportService);
    createTicket(body: any): Promise<boolean>;
    getTickets(): Promise<Supports[]>;
    getByUser(username: string): Promise<Supports[]>;
}
