export class AlunoInsertDto {
    nome: string;
    email: string;
    cpf: string;

    constructor(
        nome?: string,
        email?: string,
        cpf?: string
    ) {
        this.nome = nome || '';
        this.email = email || '';
        this.cpf = cpf || '';
    }
}