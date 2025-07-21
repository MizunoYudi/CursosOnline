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
exports.CursoController = void 0;
const tsoa_1 = require("tsoa");
const CursoService_1 = require("../service/CursoService");
const CursoInsertDto_1 = require("../model/dto/CursoInsertDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const CursoUpdateDto_1 = require("../model/dto/CursoUpdateDto");
let CursoController = class CursoController {
    cursoService = new CursoService_1.CursoService();
    async cadastrarCurso(dto, sucess, fail) {
        try {
            const curso = await this.cursoService.criarCurso(dto);
            sucess(201, new BasicResponseDto_1.BasicResponseDto("Curso cadastrado", curso));
        }
        catch (error) {
            console.log(`Erro ao cadastrar o curso:`, error.message);
            fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao cadastrar o curso: ${error.message}`, undefined));
        }
    }
    async filtrarCursoId(id, sucess, fail) {
        try {
            const curso = await this.cursoService.buscarCursoId(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Curso encontrado", curso));
        }
        catch (error) {
            console.log(`Erro ao buscar o curso: `, error.message);
            fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar curso: ${error.message}`, undefined));
        }
    }
    async listarCurso(sucess, fail) {
        try {
            const cursos = await this.cursoService.bucarCursos();
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Cursos encontrados", cursos));
        }
        catch (error) {
            console.log(`Erro ao buscar os cursos: `, error.message);
            fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao buscar cursos: ${error.message}`, undefined));
        }
    }
    async atualizarCurso(id, dto, sucess, fail) {
        try {
            const curso = await this.cursoService.atualizarCurso(id, dto);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Cursos encontrados", curso));
        }
        catch (error) {
            console.log(`Erro ao cadastrar o curso: `, error.message);
            fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao atualizar cursos: ${error.message}`, undefined));
        }
    }
    async removerCurso(id, sucess, fail) {
        try {
            const curso = await this.cursoService.removerCurso(id);
            sucess(200, new BasicResponseDto_1.BasicResponseDto("Cursos removido", curso));
        }
        catch (error) {
            console.log(`Erro ao cadastrar o curso: `, error.message);
            fail(400, new BasicResponseDto_1.BasicResponseDto(`Erro ao remover curso: ${error.message}`, undefined));
        }
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CursoInsertDto_1.CursoInsertDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "cadastrarCurso", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "filtrarCursoId", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "listarCurso", null);
__decorate([
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, CursoUpdateDto_1.CursoUpdateDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "atualizarCurso", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "removerCurso", null);
exports.CursoController = CursoController = __decorate([
    (0, tsoa_1.Route)("cursos"),
    (0, tsoa_1.Tags)("Cursos")
], CursoController);
