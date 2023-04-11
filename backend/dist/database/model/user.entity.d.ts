import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    username: string;
    email: string;
    password: string;
    role: string;
    verified: boolean;
    credit: number;
}
