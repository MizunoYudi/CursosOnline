"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoEntity = void 0;
class CursoEntity {
    id;
    titulo;
    descricao;
    instrutorId;
    constructor(titulo, descricao, instrutorId, id) {
        this.titulo = titulo || '';
        this.descricao = descricao || '';
        this.instrutorId = instrutorId || 0;
        this.id = id || 0;
    }
}
exports.CursoEntity = CursoEntity;
