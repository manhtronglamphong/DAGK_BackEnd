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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tag_entity_1 = require("../entities/tag.entity");
const typeorm_2 = require("typeorm");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async getTag() {
        const tag = await this.tagRepository.find();
        return { data: tag };
    }
    async getOneTag(tagId) {
        const tag = await this.tagRepository.findOne({ where: { id: tagId } });
        return { data: tag };
    }
    async newBoard(newtag) {
        const newl = await this.tagRepository.save(newtag);
        return { data: newl };
    }
    async getBoardTag(boardId) {
        const tag = await this.tagRepository.find({ where: { boardId: boardId } });
        return { data: tag };
    }
};
TagService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map