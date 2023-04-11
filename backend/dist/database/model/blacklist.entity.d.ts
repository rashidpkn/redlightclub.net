import { Model } from 'sequelize-typescript';
export declare class Blacklist extends Model {
    adsId: number;
    adsTitle: string;
    message: string;
    vote: [
        {
            username: string;
            response: boolean;
        }
    ];
}
