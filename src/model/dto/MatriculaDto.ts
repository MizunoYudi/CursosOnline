export class MatriculaDto {
    alunoId: number;
    cursoId: number;

    constructor(
        alunoId?: number,
        cursoId?: number,
    ){
        this.alunoId = alunoId || 0;
        this.cursoId = cursoId || 0;
    }
}