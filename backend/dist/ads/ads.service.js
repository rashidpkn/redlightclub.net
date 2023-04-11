"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsService = void 0;
const common_1 = require("@nestjs/common");
const ads_entity_1 = require("../database/model/ads.entity");
let AdsService = class AdsService {
    create(ads, username, email, region) {
        try {
            ads_entity_1.Ads.create(Object.assign(Object.assign({}, ads), { username, email, region })).catch(error => {
                console.log(error.message);
                return ({
                    status: false,
                    reason: error.message
                });
            });
            return ({
                status: true,
                reason: 'Ads is created'
            });
        }
        catch (error) {
            console.log(error.message);
            return ({
                status: false,
                reason: error.message
            });
        }
    }
    async writeReview(id, username, rating, title, desc) {
        const found = await ads_entity_1.Ads.findOne({ where: { id } });
        if (found) {
            const { review } = found;
            await ads_entity_1.Ads.update({ review: [...review, { username, rating, title, desc }] }, { where: { id } });
        }
        return true;
    }
};
AdsService = __decorate([
    (0, common_1.Injectable)()
], AdsService);
exports.AdsService = AdsService;
//# sourceMappingURL=ads.service.js.map