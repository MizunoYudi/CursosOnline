"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoInsertDto = void 0;
class AlunoInsertDto {
    nome;
    email;
    cpf;
    constructor(nome, email, cpf) {
        this.nome = nome || '';
        this.email = email || '';
        this.cpf = cpf || '';
    }
}
exports.AlunoInsertDto = AlunoInsertDto;
