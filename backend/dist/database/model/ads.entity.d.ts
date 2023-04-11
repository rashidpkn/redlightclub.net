import { Model } from 'sequelize-typescript';
export declare class Ads extends Model {
    adsTitle: string;
    username: string;
    email: string;
    phone: {
        code: string;
        number: string;
    };
    intro: string;
    location: string;
    nationality: string;
    language: string;
    eye: string;
    hair: string;
    measurement: {
        bust: string;
        waist: string;
        hip: string;
    };
    socialMedia: {
        video: string;
        website: string;
        instagram: string;
        twitter: string;
        telegram: string;
        facebook: string;
        tiktok: string;
    };
    height: number;
    weight: number;
    age: number;
    currencyType: string;
    outCall: {};
    inCall: {};
    service: {};
    profilePhoto: string;
    gallery: [];
    view: number;
    visibility: boolean;
    vacation: boolean;
    review: [
        {
            username: string;
            rating: number;
            title: string;
            desc: string;
        }
    ];
    qna: [
        {
            username: string;
            question: string;
            answer: string;
        }
    ];
    analytics: [
        {
            date: string;
            view: number;
        }
    ];
    verify: boolean;
    verificationRequest: boolean;
    verificationImage: string;
    tier: string;
    region: string;
}
