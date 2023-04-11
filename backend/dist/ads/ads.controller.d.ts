import { Ads } from 'src/database/model/ads.entity';
import { AdsService } from './ads.service';
export declare class AdsController {
    private readonly adsService;
    constructor(adsService: AdsService);
    create(ads: any, username: string, email: string, region: string): Promise<{
        status: boolean;
        reason: any;
    }>;
    getAllAds(): Promise<Ads[]>;
    getUserAds(username: string): Promise<Ads[]>;
    getAAds(adsTitle: string): Promise<Ads>;
    getById(id: number): Promise<Ads>;
    delete(id: number): {
        status: boolean;
        reason: string;
    };
    block(id: string): {
        status: boolean;
        reason: string;
    };
    unBlock(id: string): {
        status: boolean;
        reason: string;
    };
    vacation(id: number, vacation: boolean): Promise<{
        status: boolean;
        reason: string;
    }>;
    writeReview(id: number, username: string, rating: number, title: string, desc: string): Promise<boolean>;
    askQuestion(id: number, username: string, question: string): Promise<boolean>;
    edit(body: any): Promise<boolean>;
}
