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
exports.VerifyController = void 0;
const common_1 = require("@nestjs/common");
const ads_entity_1 = require("../database/model/ads.entity");
const notification_entity_1 = require("../database/model/notification.entity");
const verify_service_1 = require("./verify.service");
let VerifyController = class VerifyController {
    constructor(verifyService) {
        this.verifyService = verifyService;
    }
    async verifyRequest(id, verificationImage) {
        await ads_entity_1.Ads.update({ verificationImage, verificationRequest: true }, { where: { id } });
        await notification_entity_1.Notification.create({ message: 'Verification request', role: 'admin', type: 'verify' });
        return true;
    }
    async getAllRequest() {
        return await ads_entity_1.Ads.findAll({ where: { verificationRequest: true } });
    }
    async verify(id) {
        await ads_entity_1.Ads.update({ verificationRequest: false, verify: true }, { where: { id } });
    }
    async unVerify(id) {
        await ads_entity_1.Ads.update({ verificationRequest: false, verify: false }, { where: { id } });
    }
};
__decorate([
    (0, common_1.Post)('/request'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('verificationImage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VerifyController.prototype, "verifyRequest", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VerifyController.prototype, "getAllRequest", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VerifyController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('unverify'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VerifyController.prototype, "unVerify", null);
VerifyController = __decorate([
    (0, common_1.Controller)('verify'),
    __metadata("design:paramtypes", [verify_service_1.VerifyService])
], VerifyController);
exports.VerifyController = VerifyController;
//# sourceMappingURL=verify.controller.js.map