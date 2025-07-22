"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaService = void 0;
const MatriculaEntity_1 = require("../model/entity/MatriculaEntity");
const MatriculaRepository_1 = require("../repository/MatriculaRepository");
class MatriculaService {
    matriculaRepository = MatriculaRepository_1.MatriculaRepository.getInstance();
    async criarMatricula(data) {
        if (!data.alunoId || !data.cursoId) {
            throw new Error("Insira os dados obrigatórios: id do aluno e id ");
        }
        if (await this.validarMatricula(data)) {
            const matricula = new MatriculaEntity_1.MatriculaEntity(data.alunoId, data.cursoId);
            return await this.matriculaRepository.inserirMatricula(matricula);
        }
    }
    async buscarMatriculaId(id) {
        if (!id) {
            throw new Error("Insira o id do instrutor");
        }
        if (await this.existeMatricula(id)) {
            return this.matriculaRepository.buscarMatriculaId(id);
        }
    }
    async buscarMatriculas() {
        const matriculas = await this.matriculaRepository.buscarMatriculas();
        if (matriculas == undefined) {
            throw new Error("Não há matriculas cadastradas no sistema");
        }
        return matriculas;
    }
    async removerMatricula(id) {
        if (!id) {
            throw new Error("Insira o id da matricula a ser removida");
        }
        if (await this.existeMatricula(id)) {
            return await this.matriculaRepository.excluirMatricula(id);
        }
    }
    async validarMatricula(data) {
        if (await this.matriculaRepository.existeCopiaMatricula(data)) {
            throw new Error("O aluno já esta cadastrado no curso");
        }
        else {
            if (await this.existeCursoAluno(data)) {
                return true;
            }
        }
    }
    async existeCursoAluno(data) {
        const curso = await this.matriculaRepository.existeCurso(data.cursoId);
        const aluno = await this.matriculaRepository.existeAluno(data.alunoId);
        if (!aluno && !curso) {
            throw new Error(`Não existe curso com o id: ${data.cursoId} nem aluno com id: ${data.alunoId} cadastrado no sistema`);
        }
        return true;
    }
    async existeMatricula(id) {
        const matricula = await this.matriculaRepository.buscarMatriculaId(id);
        if (matricula == undefined) {
            throw new Error("Matricula não encontrada");
        }
        else {
            return true;
        }
    }
}
exports.MatriculaService = MatriculaService;
