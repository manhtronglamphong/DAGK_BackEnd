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
exports.RenameTag = exports.DeleteTag = exports.CreateTag = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateTag {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateTag.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateTag.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateTag.prototype, "board", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], CreateTag.prototype, "column", void 0);
exports.CreateTag = CreateTag;
class DeleteTag {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], DeleteTag.prototype, "id", void 0);
exports.DeleteTag = DeleteTag;
class RenameTag {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], RenameTag.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], RenameTag.prototype, "newName", void 0);
exports.RenameTag = RenameTag;
//# sourceMappingURL=tag.dto.js.map