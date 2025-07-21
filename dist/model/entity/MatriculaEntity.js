"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaEntity = void 0;
class MatriculaEntity {
    id;
    alunoId;
    cursoId;
    dataMatricula;
    constructor(alunoId, cursoId, dataMatricula, id) {
        this.alunoId = alunoId || 0;
        this.cursoId = cursoId || 0;
        this.dataMatricula = dataMatricula || new Date();
        this.id = id || 0;
    }
}
exports.MatriculaEntity = MatriculaEntity;
