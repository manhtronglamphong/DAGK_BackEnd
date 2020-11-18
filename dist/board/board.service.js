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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("../entities/board.entity");
const typeorm_2 = require("typeorm");
var Objecttt = require('mongodb').ObjectID;
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async getBoard() {
        const board = await this.boardRepository.find();
        return { data: board };
    }
    async getOneBoard(boardId) {
        const board = await this.boardRepository.findOne({
            where: { _id: Objecttt(boardId) },
        });
        return { data: board };
    }
    async getUserBoard(userName) {
        const board = await this.boardRepository.find({
            where: { username: userName },
        });
        return { data: board };
    }
    async newBoard(newboard) {
        let temp = await this.boardRepository.findOne({
            where: { username: newboard.username, name: newboard.name },
        });
        if (temp) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BOARD ALREADY EXISTS',
            }, common_1.HttpStatus.NOT_FOUND);
            return;
        }
        const newl = await this.boardRepository.save(newboard);
        return { data: newl };
    }
    async deleteBoard(board) {
        let temp = await this.boardRepository.findOne({
            where: { _id: Objecttt(board.id) },
        });
        const del = await this.boardRepository.delete(temp);
        return { data: temp };
    }
    async renameBoard(board) {
        let temp = await this.boardRepository.findOne({
            where: { _id: Objecttt(board.id) },
        });
        temp.name = board.newName;
        await this.boardRepository.update(temp._id.toString(), temp);
        return { data: temp };
    }
};
BoardService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map