import { Report } from 'src/database/model/reportedProfile.entity';
import { ReportService } from './report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    createReport(adsTitle: string, username: string, reason: string): Promise<boolean>;
    getReport(): Promise<Report[]>;
    deleteReport(id: number): Promise<boolean>;
    deleteAds(id: number, adsTitle: string): Promise<void>;
}
