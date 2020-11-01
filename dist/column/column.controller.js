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
exports.ColumnController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createColumnPipe_class_1 = require("../lib/ValidatePipe/createColumnPipe.class");
const column_dto_1 = require("./column.dto");
const column_service_1 = require("./column.service");
let ColumnController = class ColumnController {
    constructor(columnService) {
        this.columnService = columnService;
    }
    async getBoard() {
        return await this.columnService.getColumn();
    }
    async getOneColumn(columnId) {
        return await this.columnService.getOneColumn(columnId);
    }
    async newColumn(column) {
        return await this.columnService.newColumn(column);
    }
};
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "getBoard", null);
__decorate([
    common_1.Get(':columnId'),
    __param(0, common_1.Param('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "getOneColumn", null);
__decorate([
    common_1.Post('/newColumn'),
    __param(0, common_1.Body(new createColumnPipe_class_1.CreateColumnPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [column_dto_1.CreateColumn]),
    __metadata("design:returntype", Promise)
], ColumnController.prototype, "newColumn", null);
ColumnController = __decorate([
    swagger_1.ApiTags('Column'),
    common_1.Controller('column'),
    __param(0, common_1.Inject(column_service_1.ColumnService)),
    __metadata("design:paramtypes", [column_service_1.ColumnService])
], ColumnController);
exports.ColumnController = ColumnController;
//# sourceMappingURL=column.controller.js.map