"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ads_entity_1 = require("./model/ads.entity");
const analytics_entity_1 = require("./model/analytics.entity");
const banner_entity_1 = require("./model/banner.entity");
const bid_entity_1 = require("./model/bid.entity");
const blacklist_entity_1 = require("./model/blacklist.entity");
const notification_entity_1 = require("./model/notification.entity");
const reportedProfile_entity_1 = require("./model/reportedProfile.entity");
const user_entity_1 = require("./model/user.entity");
const support_entity_1 = require("./model/support.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'test',
                logging: false,
            });
            sequelize.addModels([user_entity_1.User, ads_entity_1.Ads, analytics_entity_1.Analytics, reportedProfile_entity_1.Report, banner_entity_1.Banners, blacklist_entity_1.Blacklist, bid_entity_1.Bid, notification_entity_1.Notification, support_entity_1.Supports]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map