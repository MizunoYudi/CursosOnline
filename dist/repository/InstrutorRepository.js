"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrutorRepository = void 0;
const mysql_1 = require("../database/mysql");
const InstrutorEntity_1 = require("../model/entity/InstrutorEntity");
class InstrutorRepository {
    static instance;
    static getInstance() {
        if (!this.instance) {
            this.instance = new InstrutorRepository();
        }
        return this.instance;
    }
    constructor() {
        this.criarTabela();
    }
    async criarTabela() {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Instrutor (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(80) NOT NULL,
                email VARCHAR(80) NOT NULL,
                especialidade VARCHAR(80) NOT NULL
            );
        `;
        try {
            const resultado = await (0, mysql_1.executarSQL)(query, []);
            console.log("Tabela Instrutor criada: ", resultado);
        }
        catch (error) {
            console.log("Erro ao criar tabela Instrutor: ", error);
        }
    }
    async inserirInstrutor(data) {
        const query = `
            insert into cursosonline.Instrutor(nome, email, especialidade)
                values(?, ?, ?);
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.nome, data.email, data.especialidade]);
        console.log("Instrutor inserido: ", resultado);
        return new InstrutorEntity_1.InstrutorEntity(data.nome, data.email, data.especialidade, resultado.insertId);
    }
    async buscarInstrutorId(id) {
        const query = `
            select * from cursosonline.Instrutor where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        const instrutor = resultado[0];
        if (instrutor == undefined) {
            return undefined;
        }
        console.log("Instrutor encontrado: ", instrutor);
        return new InstrutorEntity_1.InstrutorEntity(instrutor.nome, instrutor.email, instrutor.especialidade, instrutor.id);
    }
    async buscarInstrutores() {
        const query = `
            select * from cursosonline.Instrutor;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, []);
        if (resultado.length == 0) {
            return undefined;
        }
        console.log("Instrutores encontrados: ", resultado);
        return resultado;
    }
    async atualizarInstrutor(data, id) {
        const query = `
            update cursosonline.Instrutor
                set nome = ?,
                email = ?,
                especialidade = ?
            where id = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [data.nome, data.email, data.especialidade, id]);
        console.log("Instrutor atualizado: ", resultado);
        return this.buscarInstrutorId(id);
    }
    async excluirInstrutor(id) {
        const query = `
            delete from cursosonline.Instrutor where id = ?;
        `;
        const usuario = await this.buscarInstrutorId(id);
        const resultado = await (0, mysql_1.executarSQL)(query, [id]);
        console.log("Instrutor excluido: ", usuario, "\nResultado: ", resultado);
        return usuario;
    }
    async instrutorInstruiCurso(instrutor_id) {
        const query = `
            select * from cursosonline.Curso where instrutorId = ?;
        `;
        const resultado = await (0, mysql_1.executarSQL)(query, [instrutor_id]);
        if (resultado.length != 0) {
            return true;
        }
        return false;
    }
}
exports.InstrutorRepository = InstrutorRepository;
