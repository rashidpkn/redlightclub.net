import { Blacklist } from 'src/database/model/blacklist.entity';
import { BlacklistService } from './blacklist.service';
export declare class BlacklistController {
    private readonly blacklistService;
    constructor(blacklistService: BlacklistService);
    create(id: string, username: string, message: string, adsTitle: string): Promise<boolean>;
    get(): Promise<Blacklist[]>;
    vote(id: number, username: string, response: boolean): Promise<boolean>;
    delete(id: number): boolean;
}
