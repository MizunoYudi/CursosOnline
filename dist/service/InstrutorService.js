"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrutorService = void 0;
const InstrutorEntity_1 = require("../model/entity/InstrutorEntity");
const InstrutorRepository_1 = require("../repository/InstrutorRepository");
class InstrutorService {
    instrutorRepository = new InstrutorRepository_1.InstrutorRepository();
    criarInstrutor(data) {
        if (!data.nome || !data.email || !data.especialidade) {
            throw new Error("Insira os dados obrigatórios: nome, email e especialidade");
        }
        if (this.validarEmail(data.email)) {
            const instrutor = new InstrutorEntity_1.InstrutorEntity(data.nome, data.email, data.especialidade);
            return this.instrutorRepository.inserirInstrutor(instrutor);
        }
    }
    async buscarInstrutorId(id) {
        if (!id) {
            throw new Error("Insira o id do instrutor");
        }
        if (await this.existeInstrutor(id)) {
            return this.instrutorRepository.buscarInstrutorId(id);
        }
    }
    async buscarInstrutores() {
        const instrutor = await this.instrutorRepository.buscarInstrutores();
        if (instrutor == undefined) {
            throw new Error("Não há instrutores cadastrados");
        }
        return instrutor;
    }
    async atualizarInstrutor(id, data) {
        if (!id || !data) {
            throw new Error("Insira o id do instrutor e os dados a serem atualizados");
        }
        if (this.validarEmail(data.email) && await this.existeInstrutor(id)) {
            return await this.instrutorRepository.atualizarInstrutor(data, id);
        }
    }
    async removerInstrutor(id) {
        if (!id) {
            throw new Error("Insira o id do instrutor a ser removido");
        }
        if (await this.existeInstrutor(id)) {
            return await this.instrutorRepository.excluirInstrutor(id);
        }
    }
    async existeInstrutor(id) {
        const aluno = await this.instrutorRepository.buscarInstrutorId(id);
        if (aluno == undefined) {
            throw new Error("Instrutor não encontrado");
        }
        return true;
    }
    validarEmail(email) {
        let e = email.trim();
        if (!e.includes(" ") &&
            e.includes("@") &&
            e.includes(".") &&
            e.indexOf("@") != 0 &&
            e.indexOf("@") < e.indexOf(".") &&
            e.indexOf(".") > e.indexOf("@") + 1 &&
            e.indexOf(".") < e.length - 1) {
            return true;
        }
        else {
            throw new Error("Email invalido");
        }
    }
}
exports.InstrutorService = InstrutorService;
