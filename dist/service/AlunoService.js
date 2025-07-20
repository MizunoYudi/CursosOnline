"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const AlunoEntity_1 = require("../model/entity/AlunoEntity");
const AlunoRepository_1 = require("../repository/AlunoRepository");
class AlunoService {
    alunoRepository = AlunoRepository_1.AlunoRepository.getInstance();
    criarAluno(data) {
        if (!data.nome || !data.email || !data.cpf) {
            throw new Error("Insira os dados obrigatórios: nome, email e cpf");
        }
        if (this.validarEmail(data.email)) {
            const aluno = new AlunoEntity_1.AlunoEntity(data.nome, data.email, data.cpf);
            return this.alunoRepository.inserirAluno(aluno);
        }
    }
    async buscarAlunoId(id) {
        if (!id) {
            throw new Error("Insira o id do aluno");
        }
        if (await this.existeAluno(id)) {
            return this.alunoRepository.buscarAlunoId(id);
        }
    }
    async buscarAlunos() {
        const aluno = await this.alunoRepository.buscarAlunos();
        if (aluno == undefined) {
            throw new Error("Não há alunos cadastrados");
        }
        return aluno;
    }
    async atualizarAluno(id, data) {
        if (!id || !data) {
            throw new Error("Insira o id do aluno e os dados a serem atualizados");
        }
        if (this.validarEmail(data.email) && await this.existeAluno(id)) {
            return await this.alunoRepository.atualizarAluno(data, id);
        }
    }
    async removerAluno(id) {
        if (!id) {
            throw new Error("Insira o id do aluno a ser removido");
        }
        if (await this.existeAluno(id)) {
            return await this.alunoRepository.excluirAluno(id);
        }
    }
    async existeAluno(id) {
        const aluno = await this.alunoRepository.buscarAlunoId(id);
        if (aluno == undefined) {
            throw new Error("Aluno não encontrado");
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
exports.AlunoService = AlunoService;
