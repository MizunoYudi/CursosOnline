import { executarSQL } from "../database/mysql";
import { CursoUpdateDto } from "../model/dto/CursoUpdateDto";
import { CursoEntity } from "../model/entity/CursoEntity";

export class CursoRepository {
    private static instance: CursoRepository;

    public static getInstance(): CursoRepository {
        if (!this.instance) {
            this.instance = new CursoRepository();
        }
        return this.instance;
    }

    constructor() {
        this.criarTabela();
    }

    private async criarTabela(): Promise<void> {
        const query = `
            CREATE TABLE IF NOT EXISTS cursosonline.Curso (
                id INT AUTO_INCREMENT PRIMARY KEY,
                titulo VARCHAR(80) NOT NULL,
                descricao VARCHAR(120) NOT NULL,
                instrutor_id INT NOT NULL,
                FOREIGN KEY (instrutorId) REFERENCES cursosonline.Instrutor(id)
            )
        `;
        try {
            const resultado = await executarSQL(query, []);
            console.log("Tabela Curso criada: ", resultado);
        } catch (error: any) {
            console.log("Erro ao criar tabela Curso: ", error);
        }
    }

    async inserirCurso(data: CursoEntity){
        const query = `
            insert into cursosonline.Curso(titulo, descricao, instrutor_id)
                values(?, ?, ?);
        `;
        const resultado = await executarSQL(query, [data.titulo, data.descricao, data.instrutorId]);
        console.log("Curso inserido: ", resultado);
        return new CursoEntity(data.titulo, data.descricao, data.instrutorId, resultado.insertId);
    }

    async buscarCursoId(id: number){
        const query = `
            select * from cursosonline.Curso where id = ?;
        `;
        const resultado = await executarSQL(query, [id]);
        const curso = resultado[0];
        if(curso == undefined){
            return undefined;
        }
        console.log("Curso encontrado: ", curso);
        return new CursoEntity(curso.titulo, curso.descricao, curso.instrutor_id, curso.id);
    }

    async buscarCursos(){
        const query = `
            select * from cursosonline.Curso;
        `;
        const resultado = await executarSQL(query, []);
        if(resultado.length == 0){
            return undefined;
        }
        console.log("Cursos encontrados: ", resultado);
        return resultado;
    }

    async atualizarCurso(data: CursoUpdateDto,id: number){
        const query = `
            update cursosonline.Curso
                set titulo = ?,
                descricao = ?
            where id = ?;
        `
        const resultado = executarSQL(query, [data.titulo, data.titulo, id]);
        console.log("Curso atualizado: ", resultado);
        return this.buscarCursoId(id);
    }

    async excluirCurso(id: number){
        const query = `
            delete from cursosonline.Curso where id = ?
        `;
        const curso = this.buscarCursoId(id);
        const resultado = executarSQL(query, [id]);
        console.log("Curso removido: ", curso, "\nResuldado: ", resultado);
        return curso;
    }

    async existeInstrutor(instrutor_id: number){
        const query = `
            select * from instrutor where id = ?
        `;
        const resultado = await executarSQL(query, [instrutor_id]);
        if(resultado[0] == undefined){
            return false;
        }
        return true;
    }
}