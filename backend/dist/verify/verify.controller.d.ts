import { Ads } from 'src/database/model/ads.entity';
import { VerifyService } from './verify.service';
export declare class VerifyController {
    private readonly verifyService;
    constructor(verifyService: VerifyService);
    verifyRequest(id: number, verificationImage: string): Promise<boolean>;
    getAllRequest(): Promise<Ads[]>;
    verify(id: number): Promise<void>;
    unVerify(id: number): Promise<void>;
}
