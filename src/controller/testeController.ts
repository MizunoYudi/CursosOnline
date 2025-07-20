import { Get, Res, Route, Tags, TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("teste")
@Tags("teste")

export class testeCOntroller {
    @Get()
    teste(
        @Res() sucess: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ) {
        try {
            console.log("Esta funcinando");
            return sucess(200, new BasicResponseDto("Deu certo!", undefined));
        } catch (error: any){
            console.log("Pelo menos a funcao foi chamada");
            return fail(400, new BasicResponseDto("Deu erro", undefined));
        }
    }
}