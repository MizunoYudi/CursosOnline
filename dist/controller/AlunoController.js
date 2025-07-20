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
exports.AlunosController = void 0;
const tsoa_1 = require("tsoa");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const AlunoService_1 = require("../service/AlunoService");
const AlunoInsertDto_1 = require("../model/dto/AlunoInsertDto");
const AlunoUpdateDto_1 = require("../model/dto/AlunoUpdateDto");
let AlunosController = class AlunosController {
    alunoService = new AlunoService_1.AlunoService();
    async cadastrarAluno(dto, sucess, fail) {
        try {
            const aluno = await this.alunoService.criarAluno(dto);
            sucess(201, new BasicResponseDto_1.BasicResponseDto("Aluno cadastrado", aluno));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao cadastrar aluno: ${error.message}`, undefined));
        }
    }
    async filtrarAlunoId(id, sucess, fail) {
        try {
            const aluno = await this.alunoService.buscarAlunoId(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Aluno encontrado", aluno));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar aluno: ${error.message}`, undefined));
        }
    }
    async listarAlunos(sucess, fail) {
        try {
            const alunos = await this.alunoService.buscarAlunos();
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Alunos encontrados", alunos));
        }
        catch (error) {
            console.log(error.message);
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar aluno: ${error.message}`, undefined));
        }
    }
    async atualizarAluno(id, dto, sucess, fail) {
        try {
            const aluno = await this.alunoService.atualizarAluno(id, dto);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Aluno atualizado", aluno));
        }
        catch (error) {
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao atualizar aluno: ${error.message}`, undefined));
        }
    }
    async removerAluno(id, sucess, fail) {
        try {
            const aluno = await this.alunoService.removerAluno(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Aluno removido", aluno));
        }
        catch (error) {
            return fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao remover aluno: ${error.message}`, undefined));
        }
    }
};
exports.AlunosController = AlunosController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AlunoInsertDto_1.AlunoInsertDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "cadastrarAluno", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "filtrarAlunoId", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "listarAlunos", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, AlunoUpdateDto_1.AlunoUpdateDto, Function, Function]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "atualizarAluno", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], AlunosController.prototype, "removerAluno", null);
exports.AlunosController = AlunosController = __decorate([
    (0, tsoa_1.Route)("alunos"),
    (0, tsoa_1.Tags)("Alunos")
], AlunosController);
