"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBoardPipe = void 0;
const common_1 = require("@nestjs/common");
const board_dto_1 = require("../../board/board.dto");
let CreateBoardPipe = class CreateBoardPipe {
    async transform(value) {
        if (!value.username) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'USERNAME_REQUIRED',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        if (!value.name) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'NAME_REQUIRED',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
};
CreateBoardPipe = __decorate([
    common_1.Injectable()
], CreateBoardPipe);
exports.CreateBoardPipe = CreateBoardPipe;
//# sourceMappingURL=createBoardPipe.class.js.map