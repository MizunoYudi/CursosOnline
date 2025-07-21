import { MatriculaDto } from "../model/dto/MatriculaDto";
import { MatriculaEntity } from "../model/entity/MatriculaEntity";
import { MatriculaRepository } from "../repository/MatriculaRepository";

export class MatriculaService {
    private matriculaRepository = MatriculaRepository.getInstance();

    async criarMatricula(data: MatriculaDto) {
        if (!data.alunoId || !data.cursoId) {
            throw new Error("Insira os dados obrigatórios: id do aluno e id ");
        }

        if (await this.validarMatricula(data)) {
            const matricula = new MatriculaEntity(data.alunoId, data.cursoId);
            return await this.matriculaRepository.inserirMatricula(matricula);
        }
    }

    async buscarMatriculaId(id: number) {
        if (!id) {
            throw new Error("Insira o id do instrutor");
        }
        if (await this.existeMatricula(id)) {
            return this.matriculaRepository.buscarMatriculaId(id)
        }
    }

    async buscarMatriculas() {
        const matriculas = await this.matriculaRepository.buscarMatriculas();
        if (matriculas == undefined) {
            throw new Error("Não há matriculas cadastradas no sistema");
        }
        return matriculas;
    }

    async removerMatricula(id: number) {
        if (!id) {
            throw new Error("Insira o id da matricula a ser removida");
        }
        if (await this.existeMatricula(id)) {
            return await this.matriculaRepository.excluirMatricula(id);
        }
    }

    private async validarMatricula(data: MatriculaDto) {
        const curso = await this.matriculaRepository.existeCurso(data.cursoId);
        const aluno = await this.matriculaRepository.existeAluno(data.alunoId);
        if (!aluno && !curso) {
            throw new Error(`Não existe curso com o id: ${data.cursoId} nem aluno com id: ${data.alunoId} cadastrado no sistema`)
        }
        if (!aluno) {
            throw new Error(`Não existe aluno com o id ${data.alunoId} cadastrado no sistema`);
        }
        if (!curso) {
            throw new Error(`Não existe curso com o id ${data.cursoId} cadastrado no sistema`)
        }
        return true;
    }

    async existeMatricula(id: number) {
        const matricula = await this.matriculaRepository.buscarMatriculaId(id);
        if (matricula == undefined) {
            throw new Error("Matricula não encontrada");
        } else {
            return true;
        }
    }
}