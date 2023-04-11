"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const ads_entity_1 = require("../database/model/ads.entity");
const analytics_entity_1 = require("../database/model/analytics.entity");
let AnalyticsService = class AnalyticsService {
    async add() {
        const dates = new Date();
        const date = `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`;
        const found = await analytics_entity_1.Analytics.findOne({ where: { date } });
        if (found) {
            analytics_entity_1.Analytics.increment('view', { by: 1, where: { date } });
        }
        else {
            analytics_entity_1.Analytics.create({ date });
        }
        return {
            status: true
        };
    }
    async addAnalytics(id) {
        const dates = new Date();
        const date = `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`;
        const found = (await ads_entity_1.Ads.findOne({ where: { id } }));
        let adsAnalytics = found.analytics;
        if (adsAnalytics.find(e => e.date === date)) {
            const index = adsAnalytics.findIndex(e => e.date === date);
            adsAnalytics[index].view = adsAnalytics[index].view + 1;
            await ads_entity_1.Ads.update({ analytics: adsAnalytics }, { where: { id } });
        }
        else {
            ads_entity_1.Ads.update({
                analytics: [...adsAnalytics, {
                        date,
                        view: 1
                    }]
            }, { where: { id } });
        }
        return true;
    }
};
AnalyticsService = __decorate([
    (0, common_1.Injectable)()
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map