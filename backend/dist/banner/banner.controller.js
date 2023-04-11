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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const banner_entity_1 = require("../database/model/banner.entity");
const user_entity_1 = require("../database/model/user.entity");
const banner_service_1 = require("./banner.service");
let BannerController = class BannerController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async postBanner(username, url) {
        await banner_entity_1.Banners.create({ username, url });
        return true;
    }
    async getBanner() {
        return await banner_entity_1.Banners.findAll();
    }
    async getByUser(username) {
        return await banner_entity_1.Banners.findAll({ where: { username } });
    }
    async apporoveBanner(username, id, credit) {
        await user_entity_1.User.increment('credit', { by: credit, where: { username } });
        banner_entity_1.Banners.update({ status: true, credit }, { where: { id } });
        return true;
    }
    refuseBanner(id) {
        banner_entity_1.Banners.update({ status: true }, { where: { id } });
        return false;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "postBanner", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getBanner", null);
__decorate([
    (0, common_1.Get)('get-by-user'),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Post)('approve'),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('id')),
    __param(2, (0, common_1.Body)('credit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "apporoveBanner", null);
__decorate([
    (0, common_1.Post)('refuse'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BannerController.prototype, "refuseBanner", null);
BannerController = __decorate([
    (0, common_1.Controller)('banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerController);
exports.BannerController = BannerController;
//# sourceMappingURL=banner.controller.js.map