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
exports.RenameBoard = exports.DeleteBoard = exports.CreateBoard = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBoard {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateBoard.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateBoard.prototype, "name", void 0);
exports.CreateBoard = CreateBoard;
class DeleteBoard {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], DeleteBoard.prototype, "id", void 0);
exports.DeleteBoard = DeleteBoard;
class RenameBoard {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], RenameBoard.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], RenameBoard.prototype, "newName", void 0);
exports.RenameBoard = RenameBoard;
//# sourceMappingURL=board.dto.js.map