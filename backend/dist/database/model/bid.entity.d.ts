import { Model } from "sequelize-typescript";
export declare class Bid extends Model {
    position: number;
    tier: string;
    bid: [
        {
            username: string;
            amount: number;
        }
    ];
    largestBidAmount: number;
    status: string;
}
