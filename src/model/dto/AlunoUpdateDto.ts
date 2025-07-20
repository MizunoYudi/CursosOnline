import { AlunoEntity } from "../entity/AlunoEntity";

export class AlunoUpdateDto {
    nome: string;
    email: string;

    constructor(
        aluno: AlunoEntity,
        nome?: string,
        email?: string
    ) {
        this.nome = nome || aluno.nome;
        this.email = email || aluno.email;
    }
}