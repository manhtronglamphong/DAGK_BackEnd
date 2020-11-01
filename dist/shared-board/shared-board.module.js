"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedBoardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shared_board_entity_1 = require("../entities/shared-board.entity");
const shared_board_controller_1 = require("./shared-board.controller");
const shared_board_service_1 = require("./shared-board.service");
let SharedBoardModule = class SharedBoardModule {
};
SharedBoardModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([shared_board_entity_1.SharedBoard])],
        controllers: [shared_board_controller_1.SharedBoardController],
        providers: [shared_board_service_1.SharedBoardService]
    })
], SharedBoardModule);
exports.SharedBoardModule = SharedBoardModule;
//# sourceMappingURL=shared-board.module.js.map