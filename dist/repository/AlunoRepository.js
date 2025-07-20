"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRepository = void 0;
const mysql_1 = require("../database/mysql");
const AlunoEntity_1 = require("../model/entity/AlunoEntity");
class AlunoRepository {
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new AlunoRepository();
        }
        return this.instance;
    }
    constructor() {
        this.criarTabela();
    }
    async criarTabela() {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Aluno (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(80) NOT NULL,
                email VARCHAR(80) NOT NULL,
                cpf VARCHAR(11) NOT NULL
            )
        `;
        try {
            const resultado = await (0, mysql_1.executarSQL)(query, []);
            console.log("Tabela Aluno criada: ", resultado);
        }
        catch (error) {
            console.log("Erro ao criar a tabela Usuario: ", error);
        }
    }
    async inserirAluno(data) {
        const query = `
            insert into cursosonline.Aluno(nome, email, cpf)
                values(?, ?, ?);
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.nome, data.email, data.cpf]);
        console.log("Usuario inserido: ", resultado);
        return new AlunoEntity_1.AlunoEntity(data.nome, data.email, data.cpf, resultado.insertId);
    }
    async buscarAlunoId(id) {
        const query = `
            select * from cursosonline.Aluno where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        const aluno = resultado[0];
        if (aluno == undefined) {
            return undefined;
        }
        console.log("Aluno encontrado: ", aluno);
        return new AlunoEntity_1.AlunoEntity(aluno.nome, aluno.email, aluno.cpf, aluno.id);
    }
    async buscarAlunos() {
        const query = `
            select * from cursosonline.Aluno;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, []);
        if (resultado.length == 0) {
            return undefined;
        }
        console.log("Alunos encontrados: ", resultado);
        return resultado;
    }
    async atualizarAluno(data, id) {
        const query = `
            update cursosonline.Aluno
                set nome = ?,
                email = ?
            where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.nome, data.email, id]);
        console.log("Usuario atualizado: ", resultado);
        return this.buscarAlunoId(id);
    }
    async excluirAluno(id) {
        const query = `
            delete from cursosonline.Aluno where id = ?;
        `;
        const usuario = await this.buscarAlunoId(id);
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        console.log("Usuario excluido: ", usuario, "\nResultado: ", resultado);
        return usuario;
    }
}
exports.AlunoRepository = AlunoRepository;
