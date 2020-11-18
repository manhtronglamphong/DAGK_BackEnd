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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createTagPipe_class_1 = require("../lib/ValidatePipe/createTagPipe.class");
const tag_dto_1 = require("./tag.dto");
const tag_service_1 = require("./tag.service");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async getBoardTag(boardId) {
        return await this.tagService.getBoardTag(boardId);
    }
    async newTag(tag) {
        return await this.tagService.newBoard(tag);
    }
    async deleteTag(tag) {
        return await this.tagService.deleteTag(tag);
    }
    async renameTag(tag) {
        return await this.tagService.renameTag(tag);
    }
};
__decorate([
    common_1.Get('/board/:boardId'),
    __param(0, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getBoardTag", null);
__decorate([
    common_1.Post('/newTag'),
    __param(0, common_1.Body(new createTagPipe_class_1.CreateTagPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.CreateTag]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "newTag", null);
__decorate([
    common_1.Post('/deleteTag'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.DeleteTag]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "deleteTag", null);
__decorate([
    common_1.Post('/renameTag'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.RenameTag]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "renameTag", null);
TagController = __decorate([
    swagger_1.ApiTags('Tag'),
    common_1.Controller('tag'),
    __param(0, common_1.Inject(tag_service_1.TagService)),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map