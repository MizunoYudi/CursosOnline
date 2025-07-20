export class CursoEntity {
    id: number;
    titulo: string;
    descricao: string;
    instrutorId: number;

    constructor(
        titulo: string,
        descricao: string,
        instrutorId: number,
        id?: number
    ){
        this.titulo = titulo || '';
        this.descricao = descricao || '';
        this.instrutorId = instrutorId || 0;
        this.id = id || 0; 
    }
}