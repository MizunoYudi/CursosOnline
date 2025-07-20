export class InstrutorEntity {
    id: number;
    nome: string;
    email: string;
    especialidade: string;

    constructor(
        nome: string,
        email: string,
        especialidade: string,
        id?: number
    ){
        this.nome = nome || '';
        this.email = email || '';
        this.especialidade = especialidade || '';
        this.id = id || 0;
    }
}