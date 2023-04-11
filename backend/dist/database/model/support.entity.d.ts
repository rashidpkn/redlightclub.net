import { Model } from 'sequelize-typescript';
export declare class Supports extends Model {
    username: string;
    email: string;
    type: string;
    subject: string;
    detail: string;
    status: boolean;
}
