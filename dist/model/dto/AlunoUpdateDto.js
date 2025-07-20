"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoUpdateDto = void 0;
class AlunoUpdateDto {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome || '';
        this.email = email || '';
    }
}
exports.AlunoUpdateDto = AlunoUpdateDto;
