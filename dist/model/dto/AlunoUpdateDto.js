"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateDto = void 0;
class AlunoUpdateDto {
    nome;
    email;
    constructor(aluno, nome, email) {
        this.nome = nome || aluno.nome;
        this.email = email || aluno.email;
    }
}
exports.AlunoUpdateDto = AlunoUpdateDto;
