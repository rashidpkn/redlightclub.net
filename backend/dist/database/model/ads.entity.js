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
exports.Ads = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Ads = class Ads extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "adsTitle", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Ads.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(2000) }),
    __metadata("design:type", String)
], Ads.prototype, "intro", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "location", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "nationality", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "language", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "eye", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "hair", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Ads.prototype, "measurement", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON, defaultValue: {} }),
    __metadata("design:type", Object)
], Ads.prototype, "socialMedia", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Ads.prototype, "height", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Ads.prototype, "weight", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Ads.prototype, "age", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "currencyType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Ads.prototype, "outCall", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Ads.prototype, "inCall", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Ads.prototype, "service", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "profilePhoto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING) }),
    __metadata("design:type", Array)
], Ads.prototype, "gallery", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 1 }),
    __metadata("design:type", Number)
], Ads.prototype, "view", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], Ads.prototype, "visibility", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], Ads.prototype, "vacation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON), defaultValue: [] }),
    __metadata("design:type", Array)
], Ads.prototype, "review", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON), defaultValue: [] }),
    __metadata("design:type", Array)
], Ads.prototype, "qna", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON),
        defaultValue: [],
    }),
    __metadata("design:type", Array)
], Ads.prototype, "analytics", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], Ads.prototype, "verify", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], Ads.prototype, "verificationRequest", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Ads.prototype, "verificationImage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'none' }),
    __metadata("design:type", String)
], Ads.prototype, "tier", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'Dubai' }),
    __metadata("design:type", String)
], Ads.prototype, "region", void 0);
Ads = __decorate([
    sequelize_typescript_1.Table
], Ads);
exports.Ads = Ads;
console.log('Ads Table is OK');
//# sourceMappingURL=ads.entity.js.map