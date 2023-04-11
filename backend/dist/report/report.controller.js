"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const notification_entity_1 = require("../database/model/notification.entity");
const reportedProfile_entity_1 = require("../database/model/reportedProfile.entity");
const report_service_1 = require("./report.service");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async createReport(adsTitle, username, reason) {
        notification_entity_1.Notification.create({ message: `${adsTitle} has reported "${reason}"`, role: 'admin', type: 'report' });
        await reportedProfile_entity_1.Report.create({ adsTitle, username, reason });
        return true;
    }
    async getReport() {
        return await reportedProfile_entity_1.Report.findAll();
    }
    async deleteReport(id) {
        this.reportService.deleteReport(id);
        return true;
    }
    async deleteAds(id, adsTitle) {
        this.reportService.deleteReport(id);
        this.reportService.deleteAds(adsTitle);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('adsTitle')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "createReport", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "getReport", null);
__decorate([
    (0, common_1.Post)('/delete-report'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "deleteReport", null);
__decorate([
    (0, common_1.Post)('/delete-ads'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('adsTitle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ReportController.prototype, "deleteAds", null);
ReportController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map