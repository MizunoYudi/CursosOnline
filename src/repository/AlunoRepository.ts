import { executarSQL } from "../database/mysql";
import { AlunoUpdateDto } from "../model/dto/AlunoUpdateDto";
import { AlunoEntity } from "../model/entity/AlunoEntity";

export class AlunoRepository {
    private static instance: AlunoRepository;

    public static getInstance(): AlunoRepository {
        if (!this.instance) {
            this.instance = new AlunoRepository();
        }
        return this.instance
    }

    constructor() {
        this.criarTabela();
    }

    private async criarTabela(): Promise<void> {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Aluno (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(80) NOT NULL,
                email VARCHAR(80) NOT NULL,
                cpf VARCHAR(11) NOT NULL
            )
        `;
        try {
            const resultado = await executarSQL(query, []);
            console.log("Tabela Aluno criada: ", resultado);
        } catch (error: any) {
            console.log("Erro ao criar a tabela Usuario: ", error);
        }
    }

    async inserirAluno(data: AlunoEntity) {
        const query = `
            insert into cursosonline.Aluno(nome, email, cpf)
                values(?, ?, ?);
        `;
        const resultado = await executarSQL(query, [data.nome, data.email, data.cpf]);
        console.log("Usuario inserido: ", resultado);

        return new AlunoEntity(data.nome, data.email, data.cpf, resultado.insertId);
    }

    async buscarAlunoId(id: number){
        const query = `
            select * from cursosonline.Aluno where id = ?;
        `;
        const resultado = await executarSQL(query, [id]);
        const aluno = resultado[0];
        if(aluno == undefined){
            return undefined;
        }
        console.log("Aluno encontrado: ", aluno);
        return new AlunoEntity(aluno.nome, aluno.email, aluno.cpf, aluno.id);
    }

    async buscarAlunos(){
        const query = `
            select * from cursosonline.Aluno;
        `
        const resultado = await executarSQL(query, []);
        if(resultado.length == 0){
            return undefined;
        }
        console.log("Alunos encontrados: ", resultado);
        return resultado;
    }

    async atualizarAluno(data: AlunoUpdateDto, id: number){
        const query = `
            update cursosonline.Aluno
                set nome = ?,
                email = ?
            where id = ?;
        `
        const resultado = await executarSQL(query, [data.nome, data.email, id]);
        console.log("Usuario atualizado: ", resultado);
        return this.buscarAlunoId(id);
    }

    async excluirAluno(id: number){
        const query = `
            delete from cursosonline.Aluno where id = ?;
        `
        const usuario = await this.buscarAlunoId(id);
        const resultado = await executarSQL(query, [id]);
        console.log("Usuario excluido: ", usuario, "\nResultado: ", resultado);
        return usuario;
    }
}