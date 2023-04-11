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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bid = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Bid = class Bid extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bid.prototype, "position", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bid.prototype, "tier", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON), defaultValue: [] }),
    __metadata("design:type", Array)
], Bid.prototype, "bid", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 50 }),
    __metadata("design:type", Number)
], Bid.prototype, "largestBidAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: "close" }),
    __metadata("design:type", String)
], Bid.prototype, "status", void 0);
Bid = __decorate([
    sequelize_typescript_1.Table
], Bid);
exports.Bid = Bid;
console.log('Bid Table is OK');
//# sourceMappingURL=bid.entity.js.map