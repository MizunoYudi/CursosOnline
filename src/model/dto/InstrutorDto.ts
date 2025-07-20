export class InstrutorDto {
    nome: string;
    email: string;
    especialidade: string;

    constructor(
        nome?: string,
        email?: string,
        especialidade?: string
    ) {
        this.nome = nome || '';
        this.email = email || '';
        this.especialidade = especialidade || '';
    }
}