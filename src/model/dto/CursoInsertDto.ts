export class CursoInsertDto {
    titulo: string;
    descricao: string;
    instrutorId: number;

    constructor(
        titulo?: string,
        descricao?: string,
        instrutorId?: number
    ) {
        this.titulo = titulo || '';
        this.descricao = descricao || '';
        this.instrutorId = instrutorId || 0;
    }
}