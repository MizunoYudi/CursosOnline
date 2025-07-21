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
exports.InstrutorController = void 0;
const tsoa_1 = require("tsoa");
const InstrutorService_1 = require("../service/InstrutorService");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const InstrutorDto_1 = require("../model/dto/InstrutorDto");
let InstrutorController = class InstrutorController {
    instrutorService = new InstrutorService_1.InstrutorService();
    async cadastrarInstrutor(dto, sucess, fail) {
        try {
            const instrutor = await this.instrutorService.criarInstrutor(dto);
            sucess(201, new BasicResponseDto_1.BasicResponseDto("Instrutor cadastrado", instrutor));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao cadastrar instrutor: ${error.message}`, undefined));
        }
    }
    async filtrarInstrutorId(id, sucess, fail) {
        try {
            const instrutor = await this.instrutorService.buscarInstrutorId(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Instrutor encontrado", instrutor));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar instrutor: ${error.message}`, undefined));
        }
    }
    async listarInstrutores(sucess, fail) {
        try {
            const instrutores = await this.instrutorService.buscarInstrutores();
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Instrutores encontrados", instrutores));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar instrutores: ${error.message}`, undefined));
        }
    }
    async atualizarInstrutor(id, dto, sucess, fail) {
        try {
            const instrutor = await this.instrutorService.atualizarInstrutor(id, dto);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Instrutor atualizado", instrutor));
        }
        catch (error) {
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao atualizar instrutor: ${error.message}`, undefined));
        }
    }
    async removerInstrutor(id, sucess, fail) {
        try {
            const instrutor = await this.instrutorService.removerInstrutor(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Instrutor removido", instrutor));
        }
        catch (error) {
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao remover instrutor: ${error.message}`, undefined));
        }
    }
};
exports.InstrutorController = InstrutorController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InstrutorDto_1.InstrutorDto, Function, Function]),
    __metadata("design:returntype", Promise)
], InstrutorController.prototype, "cadastrarInstrutor", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], InstrutorController.prototype, "filtrarInstrutorId", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], InstrutorController.prototype, "listarInstrutores", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, InstrutorDto_1.InstrutorDto, Function, Function]),
    __metadata("design:returntype", Promise)
], InstrutorController.prototype, "atualizarInstrutor", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], InstrutorController.prototype, "removerInstrutor", null);
exports.InstrutorController = InstrutorController = __decorate([
    (0, tsoa_1.Route)("instrutores"),
    (0, tsoa_1.Tags)("Instrutores")
], InstrutorController);
