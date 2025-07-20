"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrutorEntity = void 0;
class InstrutorEntity {
    id;
    nome;
    email;
    especialidade;
    constructor(nome, email, especialidade, id) {
        this.nome = nome || '';
        this.email = email || '';
        this.especialidade = especialidade || '';
        this.id = id || 0;
    }
}
exports.InstrutorEntity = InstrutorEntity;
