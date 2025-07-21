export class MatriculaEntity{
    id: number;
    alunoId: number;
    cursoId: number;
    dataMatricula: Date;

    constructor(
        alunoId: number,
        cursoId: number,
        dataMatricula?: Date,
        id?: number
    ){
        this.alunoId = alunoId || 0;
        this.cursoId = cursoId || 0;
        this.dataMatricula = dataMatricula || new Date();
        this.id = id || 0;
    }
}