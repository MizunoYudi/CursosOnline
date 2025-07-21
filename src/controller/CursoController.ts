import { Body, Delete, Get, Path, Post, Put, Res, Route, Tags, TsoaResponse } from "tsoa";
import { CursoService } from "../service/CursoService";
import { CursoInsertDto } from "../model/dto/CursoInsertDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { CursoUpdateDto } from "../model/dto/CursoUpdateDto";

@Route("cursos")
@Tags("Cursos")

export class CursoController {
    private cursoService = new CursoService();

    @Post()
    async cadastrarCurso(
        @Body() dto: CursoInsertDto,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try{
            const curso = await this.cursoService.criarCurso(dto);
            sucess(201, new BasicResponseDto("Curso cadastrado", curso));
        } catch(error: any) {
            console.log(`Erro ao cadastrar o curso:`, error.message);
            fail(400, new BasicResponseDto(`Erro ao cadastrar o curso: ${error.message}`, undefined));
        }
    }

    @Get("{id}")
    async filtrarCursoId(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ){
        try{
            const curso = await this.cursoService.buscarCursoId(id);
            sucess(200, new BasicResponseDto("Curso encontrado", curso));
        } catch(error: any) {
            console.log(`Erro ao buscar o curso: `, error.message);
            fail(400, new BasicResponseDto(`Erro ao buscar curso: ${error.message}`, undefined));
        }
    }

    @Get()
    async listarCurso(
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ){
        try{
            const cursos = await this.cursoService.bucarCursos();
            sucess(200, new BasicResponseDto("Cursos encontrados", cursos));
        } catch(error: any) {
            console.log(`Erro ao buscar os cursos: `, error.message);
            fail(400, new BasicResponseDto(`Erro ao buscar cursos: ${error.message}`, undefined));
        }
    }

    @Put("{id}")
    async atualizarCurso(
        @Path() id: number,
        @Body() dto: CursoUpdateDto,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
       try{
           const curso = await this.cursoService.atualizarCurso(id, dto);
           sucess(200, new BasicResponseDto("Cursos encontrados", curso));
        } catch(error: any) {
            console.log(`Erro ao cadastrar o curso: `, error.message);
            fail(400, new BasicResponseDto(`Erro ao atualizar cursos: ${error.message}`, undefined));
        } 
    }

    @Delete("{id}")
    async removerCurso(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try{
            const curso = await this.cursoService.removerCurso(id);
           sucess(200, new BasicResponseDto("Cursos removido", curso));
        } catch(error: any) {
            console.log(`Erro ao cadastrar o curso: `, error.message);
            fail(400, new BasicResponseDto(`Erro ao remover curso: ${error.message}`, undefined));
        }
    }
}