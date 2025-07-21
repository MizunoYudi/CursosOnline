"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoService = void 0;
const CursoEntity_1 = require("../model/entity/CursoEntity");
const CursoRepository_1 = require("../repository/CursoRepository");
class CursoService {
    cursoRepository = CursoRepository_1.CursoRepository.getInstance();
    async criarCurso(data) {
        if (!data.titulo || !data.descricao || !data.instrutorId) {
            throw new Error("Insira os dados obrigatórios: titulo, descricao e id do instrutor");
        }
        const curso = new CursoEntity_1.CursoEntity(data.titulo, data.descricao, data.instrutorId);
        if (await this.cursoRepository.existeInstrutor(curso.instrutorId)) {
            return await this.cursoRepository.inserirCurso(curso);
        }
        else {
            throw new Error(`Não existe instrutor de id ${data.instrutorId} cadastrado`);
        }
    }
    async buscarCursoId(id) {
        if (!id) {
            throw new Error("Informe o id do curso");
        }
        const curso = await this.cursoRepository.buscarCursoId(id);
        if (await this.existeCurso(id)) {
            return curso;
        }
    }
    async bucarCursos() {
        const cursos = await this.cursoRepository.buscarCursos();
        if (cursos == undefined) {
            throw new Error("Não há cursos cadastrados");
        }
        return cursos;
    }
    async atualizarCurso(id, data) {
        if (!id || !data) {
            throw new Error("Insira o id do curso e os dados a serem atualizados");
        }
        ;
        if (await this.existeCurso(id)) {
            return await this.cursoRepository.atualizarCurso(data, id);
        }
    }
    async removerCurso(id) {
        if (!id) {
            throw new Error("Insira o id do curso a ser removido");
        }
        if (await this.existeCurso(id)) {
            return await this.cursoRepository.excluirCurso(id);
        }
    }
    async existeCurso(curso_id) {
        const curso = await this.cursoRepository.buscarCursoId(curso_id);
        if (curso == undefined) {
            throw new Error("Curso não encontrado");
        }
        return true;
    }
}
exports.CursoService = CursoService;
