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
exports.BlacklistController = void 0;
const common_1 = require("@nestjs/common");
const blacklist_entity_1 = require("../database/model/blacklist.entity");
const blacklist_service_1 = require("./blacklist.service");
let BlacklistController = class BlacklistController {
    constructor(blacklistService) {
        this.blacklistService = blacklistService;
    }
    async create(id, username, message, adsTitle) {
        try {
            const found = await blacklist_entity_1.Blacklist.findOne({ where: { adsTitle } });
            if (!found) {
                await blacklist_entity_1.Blacklist.create({ adsId: id, adsTitle, message, vote: [{ username, response: true }] });
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async get() {
        try {
            return await blacklist_entity_1.Blacklist.findAll();
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async vote(id, username, response) {
        try {
            const found = await blacklist_entity_1.Blacklist.findOne({ where: { id }, raw: true });
            const { vote } = found;
            if (!vote.find(e => e.username === username)) {
                blacklist_entity_1.Blacklist.update({ vote: [...vote, { username, response }] }, { where: { id } });
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    delete(id) {
        try {
            blacklist_entity_1.Blacklist.destroy({ where: { id } });
            return true;
        }
        catch (error) {
            console.log(error.message);
            return false;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('message')),
    __param(3, (0, common_1.Body)('adsTitle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('/vote'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('username')),
    __param(2, (0, common_1.Body)('response')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Boolean]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "vote", null);
__decorate([
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlacklistController.prototype, "delete", null);
BlacklistController = __decorate([
    (0, common_1.Controller)('blacklist'),
    __metadata("design:paramtypes", [blacklist_service_1.BlacklistService])
], BlacklistController);
exports.BlacklistController = BlacklistController;
//# sourceMappingURL=blacklist.controller.js.map