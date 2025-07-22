"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatriculaRepository = void 0;
const mysql_1 = require("../database/mysql");
const MatriculaEntity_1 = require("../model/entity/MatriculaEntity");
class MatriculaRepository {
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new MatriculaRepository();
        }
        return this.instance;
    }
    constructor() {
        this.criarTabela();
    }
    async criarTabela() {
        const query = `
                CREATE TABLE IF NOT EXISTS cursosonline.Matricula (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    alunoId int NOT NULL,
                    cursoId int NOT NULL,
                    dataMatricula date NOT NULL,
                    FOREIGN KEY(alunoId) REFERENCES cursosonline.Aluno(id),
                    FOREIGN KEY(cursoId) REFERENCES cursosonline.Curso(id)
                );
            `;
        try {
            const resultado = await (0, mysql_1.executarSQL)(query, []);
            console.log("Tabela Matricula criada: ", resultado);
        }
        catch (error) {
            console.log("Erro ao criar tabela matricula: ", error);
        }
    }
    async inserirMatricula(data) {
        const query = `
            insert into cursosonline.Matricula(alunoId, cursoId, dataMatricula)
                values(?, ?, ?);
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.alunoId, data.cursoId, data.dataMatricula]);
        console.log("Matricula inserida: ", resultado);
        return new MatriculaEntity_1.MatriculaEntity(data.alunoId, data.cursoId, data.dataMatricula, resultado.insertId);
    }
    async buscarMatriculaId(id) {
        const query = `
            select * from cursosonline.Matricula where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        const matricula = resultado[0];
        if (matricula == undefined) {
            return undefined;
        }
        console.log("Matricula encontrada: ", matricula);
        return new MatriculaEntity_1.MatriculaEntity(matricula.alunoId, matricula.cursoId, matricula.dataMatricula, matricula.id);
    }
    async buscarMatriculas() {
        const query = `
            select * from cursosonline.Matricula;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, []);
        if (resultado.length == 0) {
            return undefined;
        }
        console.log("Matriculas Encontradas: ", resultado);
        return resultado;
    }
    async excluirMatricula(id) {
        const query = `
            delete from cursosonline.Matricula where id = ?;
        `;
        const matricula = await this.buscarMatriculaId(id);
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        console.log("Matricula removida: ", matricula, "\nResultado: ", resultado);
        return matricula;
    }
    async existeCopiaMatricula(data) {
        const query = `
            select * from cursosonline.Matricula where alunoId = ? and cursoId = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.alunoId, data.cursoId]);
        if (resultado[0] == undefined) {
            return false;
        }
        return true;
    }
    async existeCurso(curso_id) {
        const query = `
            select * from cursosonline.Curso where id = ?
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [curso_id]);
        if (resultado[0] == undefined) {
            throw new Error(`Não existe curso com o id ${curso_id} cadastrado no sistema`);
        }
        return true;
    }
    async existeAluno(aluno_id) {
        const query = `
            select * from cursosonline.Aluno where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [aluno_id]);
        if (resultado[0] == undefined) {
            throw new Error(`Não existe aluno com o id ${aluno_id} cadastrado no sistema`);
        }
        return true;
    }
}
exports.MatriculaRepository = MatriculaRepository;
