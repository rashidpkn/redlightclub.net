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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const ads_entity_1 = require("../database/model/ads.entity");
const analytics_entity_1 = require("../database/model/analytics.entity");
const analytics_service_1 = require("./analytics.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    async add() {
        return this.analyticsService.add();
    }
    async getAnalytics() {
        return await analytics_entity_1.Analytics.findAll({ order: [['id', 'ASC']] });
    }
    async addAnalytics(id) {
        try {
            if (!isNaN(id))
                return this.analyticsService.addAnalytics(id);
            else
                throw new common_1.HttpException('Please provide all data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        catch (error) {
            throw new common_1.HttpException('Please provide all data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async getProfileAnalytics(id) {
        if (id)
            return (await ads_entity_1.Ads.findOne({ where: { id }, order: [['id', 'ASC']] })).analytics;
        else
            throw new common_1.HttpException('Please provide all data', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "add", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Post)('profile'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "addAnalytics", null);
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "getProfileAnalytics", null);
AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
exports.AnalyticsController = AnalyticsController;
//# sourceMappingURL=analytics.controller.js.map