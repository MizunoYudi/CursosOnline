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
exports.MatriculaController = void 0;
const tsoa_1 = require("tsoa");
const MatriculaService_1 = require("../service/MatriculaService");
const MatriculaDto_1 = require("../model/dto/MatriculaDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
let MatriculaController = class MatriculaController {
    matriculaService = new MatriculaService_1.MatriculaService();
    async cadastrarMatricula(dto, sucess, fail) {
        try {
            const instrutor = await this.matriculaService.criarMatricula(dto);
            sucess(201, new BasicResponseDto_1.BasicResponseDto("Matricula cadastrada", instrutor));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao cadastrar matricula: ${error.message}`, undefined));
        }
    }
    async filtrarMatriculaID(id, sucess, fail) {
        try {
            const matricula = await this.matriculaService.buscarMatriculaId(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Matricula encontrada", matricula));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar matricula: ${error.message}`, undefined));
        }
    }
    async listarMatriculas(sucess, fail) {
        try {
            const matriculas = await this.matriculaService.buscarMatriculas();
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Matriculas encontradas", matriculas));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar matriculas: ${error.message}`, undefined));
        }
    }
    async removerMatricula(id, sucess, fail) {
        try {
            const matricula = await this.matriculaService.removerMatricula(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Matricula removida", matricula));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao remover matricula: ${error.message}`, undefined));
        }
    }
};
exports.MatriculaController = MatriculaController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MatriculaDto_1.MatriculaDto, Function, Function]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "cadastrarMatricula", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "filtrarMatriculaID", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "listarMatriculas", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], MatriculaController.prototype, "removerMatricula", null);
exports.MatriculaController = MatriculaController = __decorate([
    (0, tsoa_1.Route)("matriculas"),
    (0, tsoa_1.Tags)("Matriculas")
], MatriculaController);
