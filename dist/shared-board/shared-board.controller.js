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
exports.SharedBoardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreateSharedBoardPipe_class_1 = require("../lib/ValidatePipe/CreateSharedBoardPipe.class");
const shared_board_dto_1 = require("./shared-board.dto");
const shared_board_service_1 = require("./shared-board.service");
let SharedBoardController = class SharedBoardController {
    constructor(sharedBoardService) {
        this.sharedBoardService = sharedBoardService;
    }
    async getsharedBoard() {
        return await this.sharedBoardService.getsharedBoard();
    }
    async getOneSharedBoard(sharedBoardId) {
        return await this.sharedBoardService.getOnesharedBoard(sharedBoardId);
    }
    async newSharedBoard(sharedBoard) {
        return await this.sharedBoardService.newsharedBoard(sharedBoard);
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SharedBoardController.prototype, "getsharedBoard", null);
__decorate([
    common_1.Get(':sharedBoardId'),
    __param(0, common_1.Param('sharedBoardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SharedBoardController.prototype, "getOneSharedBoard", null);
__decorate([
    common_1.Post('/newSharedBoard'),
    __param(0, common_1.Body(new CreateSharedBoardPipe_class_1.CreateSharedBoardPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shared_board_dto_1.CreateSharedBoard]),
    __metadata("design:returntype", Promise)
], SharedBoardController.prototype, "newSharedBoard", null);
SharedBoardController = __decorate([
    swagger_1.ApiTags('Shared-Board'),
    common_1.Controller('shared-board'),
    __param(0, common_1.Inject(shared_board_service_1.SharedBoardService)),
    __metadata("design:paramtypes", [shared_board_service_1.SharedBoardService])
], SharedBoardController);
exports.SharedBoardController = SharedBoardController;
//# sourceMappingURL=shared-board.controller.js.map