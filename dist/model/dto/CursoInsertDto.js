"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoInsertDto = void 0;
class CursoInsertDto {
    titulo;
    descricao;
    instrutorId;
    constructor(titulo, descricao, instrutorId) {
        this.titulo = titulo || '';
        this.descricao = descricao || '';
        this.instrutorId = instrutorId || 0;
    }
}
exports.CursoInsertDto = CursoInsertDto;
