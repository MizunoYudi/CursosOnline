"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoRepository = void 0;
const mysql_1 = require("../database/mysql");
const CursoEntity_1 = require("../model/entity/CursoEntity");
class CursoRepository {
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new CursoRepository();
        }
        return this.instance;
    }
    constructor() {
        this.criarTabela();
    }
    async criarTabela() {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Curso (
                id INT AUTO_INCREMENT PRIMARY KEY,
                titulo VARCHAR(80) NOT NULL,
                descricao VARCHAR(120) NOT NULL,
                instrutorId INT NOT NULL,
                FOREIGN KEY (instrutorId) REFERENCES cursosonline.Instrutor(id)
            );
        `;
        try {
            const resultado = await (0, mysql_1.executarSQL)(query, []);
            console.log("Tabela Curso criada: ", resultado);
        }
        catch (error) {
            console.log("Erro ao criar tabela Curso: ", error);
        }
    }
    async inserirCurso(data) {
        const query = `
            insert into cursosonline.Curso(titulo, descricao, instrutorId)
                values(?, ?, ?);
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.titulo, data.descricao, data.instrutorId]);
        console.log("Curso inserido: ", resultado);
        return new CursoEntity_1.CursoEntity(data.titulo, data.descricao, data.instrutorId, resultado.insertId);
    }
    async buscarCursoId(id) {
        const query = `
            select * from cursosonline.Curso where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        const curso = resultado[0];
        if (curso == undefined) {
            return undefined;
        }
        console.log("Curso encontrado: ", curso);
        return new CursoEntity_1.CursoEntity(curso.titulo, curso.descricao, curso.instrutorId, curso.id);
    }
    async buscarCursos() {
        const query = `
            select * from cursosonline.Curso;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, []);
        if (resultado.length == 0) {
            return undefined;
        }
        console.log("Cursos encontrados: ", resultado);
        return resultado;
    }
    async atualizarCurso(data, id) {
        const query = `
            update cursosonline.Curso
                set titulo = ?,
                descricao = ?
            where id = ?;
        `;
        const resultado = (0, mysql_1.executarSQL)(query, [data.titulo, data.descricao, id]);
        console.log("Curso atualizado: ", resultado);
        return this.buscarCursoId(id);
    }
    async excluirCurso(id) {
        const query = `
            delete from cursosonline.Curso where id = ?;
        `;
        const curso = this.buscarCursoId(id);
        const resultado = (0, mysql_1.executarSQL)(query, [id]);
        console.log("Curso removido: ", curso, "\nResuldado: ", resultado);
        return curso;
    }
    async existeInstrutor(instrutor_id) {
        const query = `
            select * from instrutor where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [instrutor_id]);
        if (resultado[0] == undefined) {
            return false;
        }
        return true;
    }
}
exports.CursoRepository = CursoRepository;
