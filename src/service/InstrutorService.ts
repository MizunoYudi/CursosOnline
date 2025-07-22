import { InstrutorDto } from "../model/dto/InstrutorDto";
import { InstrutorEntity } from "../model/entity/InstrutorEntity";
import { InstrutorRepository } from "../repository/InstrutorRepository";

export class InstrutorService {
    private instrutorRepository = new InstrutorRepository();

    criarInstrutor(data: InstrutorDto) {
        if (!data.nome || !data.email || !data.especialidade) {
            throw new Error("Insira os dados obrigatórios: nome, email e especialidade");
        }
        if (this.validarEmail(data.email)) {
            const instrutor = new InstrutorEntity(data.nome, data.email, data.especialidade);
            return this.instrutorRepository.inserirInstrutor(instrutor);
        }
    }

    async buscarInstrutorId(id: number) {
        if (!id) {
            throw new Error("Insira o id do instrutor");
        }
        if (await this.existeInstrutor(id)) {
            return this.instrutorRepository.buscarInstrutorId(id);
        }
    }

    async buscarInstrutores() {
        const instrutor = await this.instrutorRepository.buscarInstrutores();
        if (instrutor == undefined) {
            throw new Error("Não há instrutores cadastrados");
        }
        return instrutor;
    }

    async atualizarInstrutor(id: number, data: InstrutorDto) {
        if (!id || !data) {
            throw new Error("Insira o id do instrutor e os dados a serem atualizados");
        }
        if (this.validarEmail(data.email) && await this.existeInstrutor(id)) {
            return await this.instrutorRepository.atualizarInstrutor(data, id);
        }
    }

    async removerInstrutor(id: number) {
        if (!id) {
            throw new Error("Insira o id do instrutor a ser removido");
        }
        if (await this.existeInstrutor(id)) {
            if (await this.instrutorRepository.instrutorInstruiCurso(id)) {
                throw new Error("Instrutor possui cursos vinculados");
            }
            return await this.instrutorRepository.excluirInstrutor(id);
        }
    }

    private async existeInstrutor(id: number): Promise<boolean> {
        const aluno = await this.instrutorRepository.buscarInstrutorId(id);
        if (aluno == undefined) {
            throw new Error("Instrutor não encontrado");
        }
        return true;
    }

    private validarEmail(email: string): boolean {
        let e = email.trim();
        if (
            !e.includes(" ") &&
            e.includes("@") &&
            e.includes(".") &&
            e.indexOf("@") != 0 &&
            e.indexOf("@") < e.indexOf(".") &&
            e.indexOf(".") > e.indexOf("@") + 1 &&
            e.indexOf(".") < e.length - 1
        ) {
            return true;
        } else {
            throw new Error("Email invalido");
        }
    }
}