import { executarSQL } from "../database/mysql";
import { InstrutorDto } from "../model/dto/InstrutorDto";
import { InstrutorEntity } from "../model/entity/InstrutorEntity";

export class InstrutorRepository {
    private static instance: InstrutorRepository;

    public static getInstance(): InstrutorRepository {
        if (!this.instance) {
            this.instance = new InstrutorRepository();
        }
        return this.instance;
    }

    constructor() {
        this.criarTabela();
    }

    private async criarTabela(): Promise<void> {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Instrutor (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(80) NOT NULL,
                email VARCHAR(80) NOT NULL,
                especialidade VARCHAR(80) NOT NULL
            );
        `;
        try {
            const resultado = await executarSQL(query, []);
            console.log("Tabela Instrutor criada: ", resultado);
        } catch (error: any) {
            console.log("Erro ao criar tabela Instrutor: ", error);
        }
    }

    async inserirInstrutor(data: InstrutorEntity) {
        const query = `
            insert into cursosonline.Instrutor(nome, email, especialidade)
                values(?, ?, ?);
        `;
        const resultado = await executarSQL(query, [data.nome, data.email, data.especialidade]);
        console.log("Instrutor inserido: ", resultado);

        return new InstrutorEntity(data.nome, data.email, data.especialidade, resultado.insertId);
    }

    async buscarInstrutorId(id: number) {
        const query = `
            select * from cursosonline.Instrutor where id = ?;
        `;
        const resultado = await executarSQL(query, [id]);
        const instrutor = resultado[0];
        if (instrutor == undefined) {
            return undefined;
        }
        console.log("Instrutor encontrado: ", instrutor);
        return new InstrutorEntity(instrutor.nome, instrutor.email, instrutor.especialidade, instrutor.id);
    }

    async buscarInstrutores() {
        const query = `
            select * from cursosonline.Instrutor;
        `
        const resultado = await executarSQL(query, []);
        if (resultado.length == 0) {
            return undefined;
        }
        console.log("Instrutores encontrados: ", resultado);
        return resultado;
    }

    async atualizarInstrutor(data: InstrutorDto, id: number) {
        const query = `
            update cursosonline.Instrutor
                set nome = ?,
                email = ?,
                especialidade = ?
            where id = ?;
        `
        const resultado = await executarSQL(query, [data.nome, data.email, data.especialidade, id]);
        console.log("Instrutor atualizado: ", resultado);
        return this.buscarInstrutorId(id);
    }

    async excluirInstrutor(id: number) {
        const query = `
            delete from cursosonline.Instrutor where id = ?;
        `;
        const usuario = await this.buscarInstrutorId(id);
        const resultado = await executarSQL(query, [id]);
        console.log("Instrutor excluido: ", usuario, "\nResultado: ", resultado);
        return usuario;
    }

    async instrutorInstruiCurso(instrutor_id: number) {
        const query = `
            select * from cursosonline.Curso where instrutorId = ?;
        `;
        const resultado = await executarSQL(query, [instrutor_id]);
        if (resultado.length != 0) {
            return true;
        }
        return false;
    }
}