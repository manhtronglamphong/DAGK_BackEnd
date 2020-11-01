"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const board_module_1 = require("./board/board.module");
const user_module_1 = require("./user/user.module");
const tag_module_1 = require("./tag/tag.module");
const shared_board_module_1 = require("./shared-board/shared-board.module");
const column_module_1 = require("./column/column.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb+srv://meo_lamphong:lamphong19@cluster0.j3ttt.mongodb.net/DAGK?retryWrites=true&w=majority',
                database: 'DAGK',
                entities: [
                    __dirname + '/**/*.entity{.ts,.js}',
                ],
                ssl: true,
                useUnifiedTopology: true,
                useNewUrlParser: true
            }), board_module_1.BoardModule, user_module_1.UserModule, tag_module_1.TagModule, shared_board_module_1.SharedBoardModule, column_module_1.ColumnModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map