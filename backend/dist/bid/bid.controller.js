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
exports.BidController = void 0;
const common_1 = require("@nestjs/common");
const ads_entity_1 = require("../database/model/ads.entity");
const bid_entity_1 = require("../database/model/bid.entity");
const bid_service_1 = require("./bid.service");
let BidController = class BidController {
    constructor(bidService) {
        this.bidService = bidService;
    }
    async create(body) {
        const { tier, position } = body;
        try {
            if (tier && position <= 6) {
                await bid_entity_1.Bid.update({ bid: null, largestBidAmount: 50, status: "open" }, { where: { position, tier } });
                return {
                    status: true,
                    message: "Position opened"
                };
            }
            else {
                throw new common_1.HttpException("UNPROCESSABLE_ENTITY", common_1.HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }
        catch (error) {
            console.log(error.message);
            return error;
        }
    }
    async get() {
        return await bid_entity_1.Bid.findAll({ order: ['position'] });
    }
    async auction(body) {
        const { amount, username, bid, id, largestBidAmount } = body;
        try {
            if (bid) {
                if (largestBidAmount < amount) {
                    await bid_entity_1.Bid.update({
                        bid: [...bid, { amount, username }],
                        largestBidAmount: amount,
                    }, { where: { id } });
                    return {
                        status: true,
                        reason: "Biding is Successfull"
                    };
                }
                else {
                    return {
                        status: false,
                        reason: "Biding is not successful ,Beacuse amount must be greater than largest amount"
                    };
                }
            }
            else {
                await bid_entity_1.Bid.update({
                    bid: [{ amount, username }],
                    largestBidAmount: amount,
                }, { where: { id } });
            }
            return {
                status: true,
                reason: "Biding is Successfull"
            };
        }
        catch (error) {
            console.log(error.message);
            return { status: false, reason: error.message };
        }
    }
    closeBid(body) {
        const { id, bid, largestBidAmount, position, tier } = body;
        bid_entity_1.Bid.update({ status: 'close' }, { where: { position, tier } });
        return true;
    }
    renew() {
        ads_entity_1.Ads.update({ tier: 'none' }, { where: {} }),
            bid_entity_1.Bid.update({ status: 'close', bid: null, largestBidAmount: 50, baseAmount: 50 }, { where: {} });
        return true;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BidController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BidController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('auction'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BidController.prototype, "auction", null);
__decorate([
    (0, common_1.Post)('close'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BidController.prototype, "closeBid", null);
__decorate([
    (0, common_1.Post)('renew'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BidController.prototype, "renew", null);
BidController = __decorate([
    (0, common_1.Controller)('bid'),
    __metadata("design:paramtypes", [bid_service_1.BidService])
], BidController);
exports.BidController = BidController;
//# sourceMappingURL=bid.controller.js.map