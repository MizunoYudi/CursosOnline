import { executarSQL } from "../database/mysql";
import { MatriculaDto } from "../model/dto/MatriculaDto";
import { MatriculaEntity } from "../model/entity/MatriculaEntity";

export class MatriculaRepository {
    private static instance: MatriculaRepository;

    public static getInstance(): MatriculaRepository {
        if (!this.instance) {
            this.instance = new MatriculaRepository();
        }
        return this.instance
    }

    constructor() {
        this.criarTabela();
    }

    private async criarTabela(): Promise<void> {
        const query = `
                CREATE TABLE IF NOT EXISTS cursosonline.Matricula (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    alunoId int NOT NULL,
                    cursoId int NOT NULL,
                    dataMatricula date NOT NULL,
                    FOREIGN KEY(alunoId) REFERENCES cursosonline.Aluno(id),
                    FOREIGN KEY(cursoId) REFERENCES cursosonline.Curso(id)
                )
            `;
        try {
            const resultado = await executarSQL(query, []);
            console.log("Tabela Matricula criada: ", resultado);
        } catch (error: any) {
            console.log("Erro ao criar tabela matricula: ", error);
        }
    }

    async inserirMatricula(data: MatriculaEntity) {
        const query = `
            insert into cursosonline.Matricula(alunoId, cursoId, dataMatricula)
                values(?, ?, ?);
        `;
        const resultado = await executarSQL(query, [data.alunoId, data.cursoId, data.dataMatricula]);
        console.log("Matricula inserida: ", resultado);
        return await this.buscarMatriculaId(resultado.insertId);
    }

    async buscarMatriculaId(id: number) {
        const query = `
            select * from cursosonline.Matricula where id = ?
        `;
        const resultado = await executarSQL(query, [id]);
        const matricula = resultado[0];
        if (matricula == undefined) {
            return undefined;
        }
        console.log("Matricula encontrada: ", matricula);
        return new MatriculaEntity(matricula.alunoId, matricula.cursoId, matricula.dataMatricula, matricula.id);
    }

    async buscarMatriculas() {
        const query = `
            select * from cursosonline.Matricula;
        `;
        const resultado = await executarSQL(query, []);
        if(resultado.length == 0){
            return undefined;
        }
        console.log("Matriculas Encontradas: ", resultado);
        return resultado;
    }

    async excluirMatricula(id: number) {
        const query = `
            delete from cursosonline.Matricula where id = ?
        `;
        const matricula = await this.buscarMatriculaId(id);
        const resultado = await executarSQL(query, [id]);
        console.log("Matricula removida: ", matricula, "\nResultado: ", resultado);
        return matricula;
    }

    async existeCopiaMatricula(data: MatriculaDto){
        const query = `
            select * from cursosonline.Matricula where alunoId = ? and cursoId = ?;
        `;
        const resultado = await executarSQL(query, [data.alunoId, data.cursoId]);
        if(resultado[0] == undefined){
            return false;
        }
        return true;
    }

    async existeCurso(curso_id: number){
        const query = `
            select * from cursosonline.Curso where id = ?
        `;
        const resultado = await executarSQL(query, [curso_id]);
        if(resultado[0] == undefined){
            throw new Error(`Não existe curso com o id ${curso_id} cadastrado no sistema`);
        }
        return true;
    }

    async existeAluno(aluno_id: number){
        const query = `
            select * from cursosonline.Aluno where id = ?
        `;
        const resultado = await executarSQL(query, [aluno_id]);
        if(resultado[0] == undefined){
            throw new Error(`Não existe aluno com o id ${aluno_id} cadastrado no sistema`);
        }
        return true;
    }
}