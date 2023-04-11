import { Model } from 'sequelize-typescript';
export declare class Notification extends Model {
    message: string;
    type: string;
    role: string;
}
