import { Bid } from 'src/database/model/bid.entity';
import { BidService } from './bid.service';
export declare class BidController {
    private readonly bidService;
    constructor(bidService: BidService);
    create(body: any): Promise<any>;
    get(): Promise<Bid[]>;
    auction(body: any): Promise<{
        status: boolean;
        reason: any;
    }>;
    closeBid(body: any): boolean;
    renew(): boolean;
}
