import { AlunoInsertDto } from "../model/dto/AlunoInsertDto";
import { AlunoUpdateDto } from "../model/dto/AlunoUpdateDto";
import { AlunoEntity } from "../model/entity/AlunoEntity";
import { AlunoRepository } from "../repository/AlunoRepository";

export class AlunoService {
    private alunoRepository = AlunoRepository.getInstance();

    criarAluno(data: AlunoInsertDto) {
        if (!data.nome || !data.email || !data.cpf) {
            throw new Error("Insira os dados obrigatórios: nome, email e cpf");
        }
        if (this.validarEmail(data.email)) {
            const aluno = new AlunoEntity(data.nome, data.email, data.cpf);
            return this.alunoRepository.inserirAluno(aluno);
        }
    }

    async buscarAlunoId(id: number) {
        if (!id) {
            throw new Error("Insira o id do aluno");
        }
        if (await this.existeAluno(id)) {
            return this.alunoRepository.buscarAlunoId(id);
        }
    }

    async buscarAlunos() {
        const aluno = await this.alunoRepository.buscarAlunos();
        if (aluno == undefined) {
            throw new Error("Não há alunos cadastrados");
        }
        return aluno;
    }

    async atualizarAluno(id: number, data: AlunoUpdateDto) {
        if (!id || !data) {
            throw new Error("Insira o id do aluno e os dados a serem atualizados");
        }
        if (this.validarEmail(data.email) && await this.existeAluno(id)) {
            return await this.alunoRepository.atualizarAluno(data, id);
        }
    }

    async removerAluno(id: number) {
        if (!id) {
            throw new Error("Insira o id do aluno a ser removido");
        }
        if (await this.existeAluno(id)) {
            return await this.alunoRepository.excluirAluno(id);
        }
    }

    private async existeAluno(id: number): Promise<boolean> {
        const aluno = await this.alunoRepository.buscarAlunoId(id);
        if (aluno == undefined) {
            throw new Error("Aluno não encontrado");
        }
        return true;
    }

    private validarEmail(email: string): boolean {
        let e = email.trim();
        if (
            !e.includes(" ") &&
            e.includes("@") &&
            e.includes(".") &&
            e.indexOf("@") != 0 &&
            e.indexOf("@") < e.indexOf(".") &&
            e.indexOf(".") > e.indexOf("@") + 1 &&
            e.indexOf(".") < e.length - 1
        ) {
            return true
        } else {
            throw new Error("Email invalido");
        }
    }
}