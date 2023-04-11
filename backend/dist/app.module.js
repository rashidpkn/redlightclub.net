"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const database_module_1 = require("./database/database.module");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const ads_module_1 = require("./ads/ads.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const analytics_module_1 = require("./analytics/analytics.module");
const report_module_1 = require("./report/report.module");
const banner_module_1 = require("./banner/banner.module");
const verify_module_1 = require("./verify/verify.module");
const blacklist_module_1 = require("./blacklist/blacklist.module");
const bid_module_1 = require("./bid/bid.module");
const notification_module_1 = require("./notification/notification.module");
const support_module_1 = require("./support/support.module");
const storage = (0, multer_1.diskStorage)({
    destination(req, file, cb) {
        cb(null, `./files`);
    },
    filename(req, file, cb) {
        cb(null, `${req.body.name}-${file.originalname}`);
    }
});
const Multer = platform_express_1.MulterModule.register({
    storage: storage
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule, database_module_1.DatabaseModule, Multer, ads_module_1.AdsModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.mainModule['path'], '../files'),
                serveRoot: '/files'
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.mainModule['path'], '../build')
            }),
            analytics_module_1.AnalyticsModule,
            report_module_1.ReportModule,
            banner_module_1.BannerModule,
            verify_module_1.VerifyModule,
            blacklist_module_1.BlacklistModule,
            bid_module_1.BidModule,
            notification_module_1.NotificationModule,
            support_module_1.SupportModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map