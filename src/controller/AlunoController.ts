import { Body, Get, Put, Path, Post, Res, Route, Tags, TsoaResponse, Delete } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { AlunoService } from "../service/AlunoService";
import { AlunoInsertDto } from "../model/dto/AlunoInsertDto";
import { AlunoUpdateDto } from "../model/dto/AlunoUpdateDto";

@Route("alunos")
@Tags("Alunos")

export class AlunosController {
    private alunoService = new AlunoService();

    @Post()
    async cadastrarAluno(
        @Body() dto: AlunoInsertDto,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const aluno = await this.alunoService.criarAluno(dto);
            sucess(201, new BasicResponseDto("Aluno cadastrado", aluno));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao cadastrar aluno: ${error.message}`, undefined));
        }
    }

    @Get("{id}")
    async filtrarAlunoId(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const aluno = await this.alunoService.buscarAlunoId(id);
            sucess(200, new BasicResponseDto("Aluno encontrado", aluno));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar aluno: ${error.message}`, undefined));
        }
    }

    @Get()
    async listarAlunos(
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const alunos = await this.alunoService.buscarAlunos();
            sucess(200, new BasicResponseDto("Alunos encontrados", alunos));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar aluno: ${error.message}`, undefined));
        }
    }

    @Put("{id}")
    async atualizarAluno(
        @Path() id: number,
        @Body() dto: AlunoUpdateDto,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const aluno = await this.alunoService.atualizarAluno(id, dto);
            sucess(200, new BasicResponseDto("Aluno atualizado", aluno));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(`Erro ao atualizar aluno: ${error.message}`, undefined));
        }
    }

    @Delete("{id}")
    async removerAluno(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const aluno = await this.alunoService.removerAluno(id);
            sucess(200, new BasicResponseDto("Aluno removido", aluno));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(`Erro ao remover aluno: ${error.message}`, undefined));
        }
    }
}