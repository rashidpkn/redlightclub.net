import { Analytics } from 'src/database/model/analytics.entity';
import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    add(): Promise<{
        status: boolean;
    }>;
    getAnalytics(): Promise<Analytics[]>;
    addAnalytics(id: number): Promise<boolean>;
    getProfileAnalytics(id: Number): Promise<[{
        date: string;
        view: number;
    }]>;
}
