/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    uploadProfile(file: Express.Multer.File): void;
    uploadGallery(file: Express.Multer.File): void;
}
