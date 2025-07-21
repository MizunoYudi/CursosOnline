"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoUpdateDto = void 0;
class CursoUpdateDto {
    titulo;
    descricao;
    constructor(titulo, descricao) {
        this.titulo = titulo || '';
        this.descricao = descricao || '';
    }
}
exports.CursoUpdateDto = CursoUpdateDto;
