export class MatriculaDto {
    id: number;
    alunoId: number;
    cursoId: number;

    constructor(
        alunoId?: number,
        cursoId?: number,
        dataMatricula?: Date,
        id?: number
    ){
        this.alunoId = alunoId || 0;
        this.cursoId = cursoId || 0;
        this.id = id || 0;
    }
}