import { Banners } from 'src/database/model/banner.entity';
import { BannerService } from './banner.service';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    postBanner(username: string, url: string): Promise<boolean>;
    getBanner(): Promise<Banners[]>;
    getByUser(username: string): Promise<Banners[]>;
    apporoveBanner(username: string, id: number, credit: number): Promise<boolean>;
    refuseBanner(id: number): boolean;
}
