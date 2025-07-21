"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaDto = void 0;
class MatriculaDto {
    alunoId;
    cursoId;
    constructor(alunoId, cursoId) {
        this.alunoId = alunoId || 0;
        this.cursoId = cursoId || 0;
    }
}
exports.MatriculaDto = MatriculaDto;
