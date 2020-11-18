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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const createUserPipe_class_1 = require("../lib/ValidatePipe/createUserPipe.class");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUser() {
        return await this.userService.getUser();
    }
    async getOneUser(username) {
        return await this.userService.getOneUser(username);
    }
    async newUser(user) {
        return await this.userService.newUser(user);
    }
    async Login(user) {
        return await this.userService.login(user);
    }
    async editPassword(user) {
        return await this.userService.editPassword(user);
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Get(':username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOneUser", null);
__decorate([
    common_1.Post('/register'),
    __param(0, common_1.Body(new createUserPipe_class_1.CreateUserPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "newUser", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.Login]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Login", null);
__decorate([
    common_1.Post('/editpassword'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.EditPassword]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editPassword", null);
UserController = __decorate([
    common_1.Controller('user'),
    __param(0, common_1.Inject(user_service_1.UserService)),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map