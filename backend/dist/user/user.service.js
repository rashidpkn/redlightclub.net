"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../database/model/user.entity");
let UserService = class UserService {
    constructor() {
        this.create = async (username, email, password, role) => {
            try {
                const found = await user_entity_1.User.findOne({ where: { email } });
                if (found) {
                    return {
                        status: false,
                        reason: 'User already exist',
                    };
                }
                else {
                    await user_entity_1.User.create({ username, email, password, role });
                    return {
                        status: true,
                        reason: 'User is created',
                        token: 'asdfgjkl',
                        role: role,
                    };
                }
            }
            catch (error) {
                return {
                    status: false,
                    reason: error.message,
                };
            }
        };
        this.login = async (email, password) => {
            try {
                const found = await user_entity_1.User.findOne({ where: { email, password } });
                if (found) {
                    return {
                        status: true,
                        reason: '',
                        token: 'asdfgjkl',
                        role: found.role,
                        username: found.username
                    };
                }
                else {
                    return {
                        status: false,
                        reason: 'User not Exist',
                    };
                }
            }
            catch (error) {
                return {
                    status: false,
                    reason: error.message,
                };
            }
        };
        this.delete = async () => { };
        this.verify = async () => { };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map