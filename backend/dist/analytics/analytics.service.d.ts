export declare class AnalyticsService {
    add(): Promise<{
        status: boolean;
    }>;
    addAnalytics(id: Number): Promise<boolean>;
}
