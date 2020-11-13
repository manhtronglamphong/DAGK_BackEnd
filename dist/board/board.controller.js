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
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createBoardPipe_class_1 = require("../lib/ValidatePipe/createBoardPipe.class");
const board_dto_1 = require("./board.dto");
const board_service_1 = require("./board.service");
let BoardController = class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    async getBoard() {
        return await this.boardService.getBoard();
    }
    async getOneBoard(boardId) {
        return await this.boardService.getOneBoard(boardId);
    }
    async getUserBoard(username) {
        return await this.boardService.getUserBoard(username);
    }
    async newBoard(board) {
        return await this.boardService.newBoard(board);
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoard", null);
__decorate([
    common_1.Get(':boardId'),
    __param(0, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getOneBoard", null);
__decorate([
    common_1.Get('/boards/:username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getUserBoard", null);
__decorate([
    common_1.Post('/newBoard'),
    __param(0, common_1.Body(new createBoardPipe_class_1.CreateBoardPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [board_dto_1.CreateBoard]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "newBoard", null);
BoardController = __decorate([
    swagger_1.ApiTags('Board'),
    common_1.Controller('board'),
    __param(0, common_1.Inject(board_service_1.BoardService)),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardController);
exports.BoardController = BoardController;
//# sourceMappingURL=board.controller.js.map