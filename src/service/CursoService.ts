import { CursoInsertDto } from "../model/dto/CursoInsertDto";
import { CursoUpdateDto } from "../model/dto/CursoUpdateDto";
import { CursoEntity } from "../model/entity/CursoEntity";
import { CursoRepository } from "../repository/CursoRepository";

export class CursoService {
    private cursoRepository = CursoRepository.getInstance();

    async criarCurso(data: CursoInsertDto){
        if(!data.titulo || !data.descricao || !data.instrutorId){
            throw new Error("Insira os dados obrigatórios: titulo, descricao e id do instrutor");
        }
        const curso = new CursoEntity(data.titulo, data.descricao, data.instrutorId);
        if(await this.cursoRepository.existeInstrutor(curso.instrutorId)){
            return await this.cursoRepository.inserirCurso(curso);
        }
    }

    async buscarCursoId(id: number){
        if(!id){
            throw new Error("Informe o id do curso");
        }
        const curso = await this.cursoRepository.buscarCursoId(id);
        if(await this.existeCurso(id)){
            return curso;
        }
    }

    async bucarCursos(){
        const cursos = await this.cursoRepository.buscarCursos();
        if(cursos == undefined){
            throw new Error("Não há cursos cadastrados");
        }
        return cursos;
    }

    async atualizarCurso(id: number, data: CursoUpdateDto){
        if( !id || !data){
            throw new Error("Insira o id do curso e os dados a serem atualizados")
        };
        if(await this.existeCurso(id)){
            return await this.cursoRepository.atualizarCurso(data, id);
        }   
    }

    async removerCurso(id: number){
        if (!id) {
            throw new Error("Insira o id do curso a ser removido");
        }
        if(await this.existeCurso(id)){
            return await this.cursoRepository.excluirCurso(id);
        }
    }

    async existeCurso(curso_id:number){
        const curso = this.cursoRepository.buscarCursoId(curso_id);
        if(curso == undefined){
            throw new Error("Curso não encontrado");
        }
        return true;
    }
}