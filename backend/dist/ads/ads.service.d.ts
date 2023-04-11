export declare class AdsService {
    create(ads: JSON, username: string, email: string, region: string): {
        status: boolean;
        reason: any;
    };
    writeReview(id: number, username: string, rating: number, title: string, desc: string): Promise<boolean>;
}
