export class CursoUpdateDto {
    titulo: string;
    descricao: string;

    constructor(
        titulo?: string,
        descricao?: string
    ) {
        this.titulo = titulo || '';
        this.descricao = descricao || '';
    }
}