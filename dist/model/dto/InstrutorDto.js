"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrutorDto = void 0;
class InstrutorDto {
    nome;
    email;
    especialidade;
    constructor(nome, email, especialidade) {
        this.nome = nome || '';
        this.email = email || '';
        this.especialidade = especialidade || '';
    }
}
exports.InstrutorDto = InstrutorDto;
