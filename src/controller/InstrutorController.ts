import { Body, Get, Post, Path, Res, Route, Tags, TsoaResponse, Put, Delete } from "tsoa";
import { InstrutorService } from "../service/InstrutorService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { InstrutorDto } from "../model/dto/InstrutorDto";

@Route("instrutores")
@Tags("Instrutores")

export class InstrutorController {
    private instrutorService = new InstrutorService();

    @Post()
    async cadastrarInstrutor(
        @Body() dto: InstrutorDto,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutor = await this.instrutorService.criarInstrutor(dto);
            sucess(201, new BasicResponseDto("Instrutor cadastrado", instrutor))
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao cadastrar instrutor: ${error.message}`, undefined));
        }
    }

    @Get("{id}")
    async filtrarInstrutorId(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutor = await this.instrutorService.buscarInstrutorId(id);
            sucess(200, new BasicResponseDto("Instrutor encontrado", instrutor));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar instrutor: ${error.message}`, undefined));
        }
    }

    @Get()
    async listarInstrutores(
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutores = await this.instrutorService.buscarInstrutores();
            sucess(200, new BasicResponseDto("Instrutores encontrados", instrutores));
        } catch (error: any) {
            console.log(error.message);
            return fail(400, new BasicResponseDto(`Erro ao buscar instrutores: ${error.message}`, undefined));
        }
    }

    @Put("{id}")
    async atualizarInstrutor(
        @Path() id: number,
        @Body() dto: InstrutorDto,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutor = await this.instrutorService.atualizarInstrutor(id, dto);
            sucess(200, new BasicResponseDto("Instrutor atualizado", instrutor));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(`Erro ao atualizar instrutor: ${error.message}`, undefined));
        }
    }

    @Delete("{id}")
    async removerInstrutor(
        @Path() id: number,
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            const instrutor = await this.instrutorService.removerInstrutor(id);
            sucess(200, new BasicResponseDto("Instrutor removido", instrutor));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(`Erro ao remover instrutor: ${error.message}`, undefined));
        }
    }
}