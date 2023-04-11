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
exports.AdsController = void 0;
const common_1 = require("@nestjs/common");
const request_mapping_decorator_1 = require("@nestjs/common/decorators/http/request-mapping.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const ads_entity_1 = require("../database/model/ads.entity");
const notification_entity_1 = require("../database/model/notification.entity");
const ads_service_1 = require("./ads.service");
let AdsController = class AdsController {
    constructor(adsService) {
        this.adsService = adsService;
    }
    async create(ads, username, email, region) {
        await notification_entity_1.Notification.create({ message: `${ads.adsTitle} New Profile is created`, role: 'admin', type: 'newProfile' });
        return this.adsService.create(ads, username, email, region);
    }
    getAllAds() {
        return ads_entity_1.Ads.findAll();
    }
    getUserAds(username) {
        return ads_entity_1.Ads.findAll({ where: { username } });
    }
    getAAds(adsTitle) {
        ads_entity_1.Ads.increment('view', { by: 1, where: { adsTitle } });
        return ads_entity_1.Ads.findOne({ where: { adsTitle } });
    }
    async getById(id) {
        try {
            if (!isNaN(id)) {
                await ads_entity_1.Ads.increment('view', { by: 1, where: { id } });
                return await ads_entity_1.Ads.findOne({ where: { id } });
            }
            else
                throw new common_1.HttpException('UNPROCESSABLE_ENTITY', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        catch (error) {
            throw new common_1.HttpException('UNPROCESSABLE_ENTITY', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    delete(id) {
        ads_entity_1.Ads.destroy({ where: { id } });
        return {
            status: true,
            reason: 'Ads is Deleted'
        };
    }
    block(id) {
        ads_entity_1.Ads.update({ visibility: false }, { where: { id } });
        return {
            status: true,
            reason: 'Ads is Blocked'
        };
    }
    unBlock(id) {
        ads_entity_1.Ads.update({ visibility: true }, { where: { id } });
        return {
            status: true,
            reason: 'Ads is UnBlocked'
        };
    }
    async vacation(id, vacation) {
        await ads_entity_1.Ads.update({ vacation }, { where: { id } });
        return {
            status: true,
            reason: 'Vacation Updated'
        };
    }
    async writeReview(id, username, rating, title, desc) {
        return this.adsService.writeReview(id, username, rating, title, desc);
    }
    async askQuestion(id, username, question) {
        const found = await ads_entity_1.Ads.findOne({ where: { id } });
        if (found) {
            await ads_entity_1.Ads.update({ qna: [...found.qna, { username, question }] }, { where: { id } });
        }
        return true;
    }
    async edit(body) {
        const { id, edit } = body;
        try {
            await ads_entity_1.Ads.update(Object.assign({}, edit), { where: { id } });
            return true;
        }
        catch (error) {
            console.log(error.message);
            return false;
        }
    }
};
__decorate([
    (0, request_mapping_decorator_1.Post)('create'),
    __param(0, (0, route_params_decorator_1.Body)('ads')),
    __param(1, (0, route_params_decorator_1.Body)('username')),
    __param(2, (0, route_params_decorator_1.Body)('email')),
    __param(3, (0, route_params_decorator_1.Body)('region')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "create", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('get-all-ads'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "getAllAds", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('get-user-ads'),
    __param(0, (0, route_params_decorator_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "getUserAds", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('get-a-ads'),
    __param(0, (0, route_params_decorator_1.Query)('adsTitle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "getAAds", null);
__decorate([
    (0, request_mapping_decorator_1.Get)('get-by-id'),
    __param(0, (0, route_params_decorator_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "getById", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('delete'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "delete", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('block'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "block", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('unblock'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "unBlock", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('vacation'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __param(1, (0, route_params_decorator_1.Body)('vacation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "vacation", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('write-review'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __param(1, (0, route_params_decorator_1.Body)('username')),
    __param(2, (0, route_params_decorator_1.Body)('rating')),
    __param(3, (0, route_params_decorator_1.Body)('title')),
    __param(4, (0, route_params_decorator_1.Body)('desc')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "writeReview", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('ask-question'),
    __param(0, (0, route_params_decorator_1.Body)('id')),
    __param(1, (0, route_params_decorator_1.Body)('username')),
    __param(2, (0, route_params_decorator_1.Body)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "askQuestion", null);
__decorate([
    (0, request_mapping_decorator_1.Post)('edit'),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "edit", null);
AdsController = __decorate([
    (0, common_1.Controller)('ads'),
    __metadata("design:paramtypes", [ads_service_1.AdsService])
], AdsController);
exports.AdsController = AdsController;
//# sourceMappingURL=ads.controller.js.map