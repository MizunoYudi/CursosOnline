import { Body, Delete, Get, Path, Post, Res, Route, Tags, TsoaResponse } from "tsoa";
import { MatriculaService } from "../service/MatriculaService";
import { MatriculaDto } from "../model/dto/MatriculaDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("matriculas")
@Tags("Matriculas")

export class MatriculaController {
    private matriculaService = new MatriculaService();

    @Post()
    async cadastrarMatricula(
        @Body() dto: MatriculaDto,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutor = await this.matriculaService.criarMatricula(dto);
            sucess(201, new BasicResponseDto("Matricula cadastrada", instrutor));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao cadastrar matricula: ${error.message}`, undefined));
        }
    }

    @Get("{id}")
    async filtrarMatriculaID(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const matricula = await this.matriculaService.buscarMatriculaId(id);
            sucess(200, new BasicResponseDto("Matricula encontrada", matricula));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar matricula: ${error.message}`, undefined));
        }
    }

    @Get()
    async listarMatriculas(
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const matriculas = await this.matriculaService.buscarMatriculas();
            sucess(200, new BasicResponseDto("Matriculas encontradas", matriculas));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar matriculas: ${error.message}`, undefined));
        }
    }

    @Delete("{id}")
    async removerMatricula(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const matricula = await this.matriculaService.removerMatricula(id);
            sucess(200, new BasicResponseDto("Matricula removida", matricula));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao remover matricula: ${error.message}`, undefined));
        }
    }
}