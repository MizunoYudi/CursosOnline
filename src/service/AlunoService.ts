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

        if(this.validarEmail(data.email)){
            const aluno = new AlunoEntity(data.nome, data.email, data.cpf);
            return this.alunoRepository.inserirAluno(aluno);
        }
    }

    buscarAlunoId(id: number) {
        if (!id) {
            throw new Error("Insira o id do aluno");
        }
        return this.alunoRepository.buscarAlunoId(id);
    }

    buscarAlunos() {
        return this.alunoRepository.buscarAlunos();
    }

    atualizarAluno(id: number, data: AlunoUpdateDto) {
        if (!id || !data) {
            throw new Error("Insira o id do aluno e os dados a serem atualizados");
        }
        if(this.validarEmail(data.email)){
            return this.alunoRepository.atualizarAluno(data, id);
        }
    }

    removerAluno(id: number) {
        if (!id) {
            throw new Error("Insira o id do aluno a ser removido");
        }
        return this.alunoRepository.removerAluno(id);
    }

    validarEmail(email: string): boolean {
        let e = email.trim();
        if (
            !e.includes(" ") &&
            e.includes("@") &&
            e.includes(".") &&
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