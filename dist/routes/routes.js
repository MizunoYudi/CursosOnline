"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MatriculaController_1 = require("./../controller/MatriculaController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const InstrutorController_1 = require("./../controller/InstrutorController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CursoController_1 = require("./../controller/CursoController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AlunoController_1 = require("./../controller/AlunoController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "MatriculaDto": {
        "dataType": "refObject",
        "properties": {
            "alunoId": { "dataType": "double", "required": true },
            "cursoId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InstrutorDto": {
        "dataType": "refObject",
        "properties": {
            "nome": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "especialidade": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CursoInsertDto": {
        "dataType": "refObject",
        "properties": {
            "titulo": { "dataType": "string", "required": true },
            "descricao": { "dataType": "string", "required": true },
            "instrutorId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CursoUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "titulo": { "dataType": "string", "required": true },
            "descricao": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlunoInsertDto": {
        "dataType": "refObject",
        "properties": {
            "nome": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "cpf": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlunoUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "nome": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsMatriculaController_cadastrarMatricula = {
        dto: { "in": "body", "name": "dto", "required": true, "ref": "MatriculaDto" },
        sucess: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.post('/matriculas', ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController)), ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController.prototype.cadastrarMatricula)), async function MatriculaController_cadastrarMatricula(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMatriculaController_cadastrarMatricula, request, response });
            const controller = new MatriculaController_1.MatriculaController();
            await templateService.apiHandler({
                methodName: 'cadastrarMatricula',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMatriculaController_filtrarMatriculaID = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/matriculas/:id', ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController)), ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController.prototype.filtrarMatriculaID)), async function MatriculaController_filtrarMatriculaID(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMatriculaController_filtrarMatriculaID, request, response });
            const controller = new MatriculaController_1.MatriculaController();
            await templateService.apiHandler({
                methodName: 'filtrarMatriculaID',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMatriculaController_listarMatriculas = {
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/matriculas', ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController)), ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController.prototype.listarMatriculas)), async function MatriculaController_listarMatriculas(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMatriculaController_listarMatriculas, request, response });
            const controller = new MatriculaController_1.MatriculaController();
            await templateService.apiHandler({
                methodName: 'listarMatriculas',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMatriculaController_removerMatricula = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.delete('/matriculas/:id', ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController)), ...((0, runtime_1.fetchMiddlewares)(MatriculaController_1.MatriculaController.prototype.removerMatricula)), async function MatriculaController_removerMatricula(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMatriculaController_removerMatricula, request, response });
            const controller = new MatriculaController_1.MatriculaController();
            await templateService.apiHandler({
                methodName: 'removerMatricula',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInstrutorController_cadastrarInstrutor = {
        dto: { "in": "body", "name": "dto", "required": true, "ref": "InstrutorDto" },
        sucess: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.post('/instrutores', ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController)), ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController.prototype.cadastrarInstrutor)), async function InstrutorController_cadastrarInstrutor(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_cadastrarInstrutor, request, response });
            const controller = new InstrutorController_1.InstrutorController();
            await templateService.apiHandler({
                methodName: 'cadastrarInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInstrutorController_filtrarInstrutorId = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/instrutores/:id', ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController)), ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController.prototype.filtrarInstrutorId)), async function InstrutorController_filtrarInstrutorId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_filtrarInstrutorId, request, response });
            const controller = new InstrutorController_1.InstrutorController();
            await templateService.apiHandler({
                methodName: 'filtrarInstrutorId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInstrutorController_listarInstrutores = {
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/instrutores', ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController)), ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController.prototype.listarInstrutores)), async function InstrutorController_listarInstrutores(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_listarInstrutores, request, response });
            const controller = new InstrutorController_1.InstrutorController();
            await templateService.apiHandler({
                methodName: 'listarInstrutores',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInstrutorController_atualizarInstrutor = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        dto: { "in": "body", "name": "dto", "required": true, "ref": "InstrutorDto" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.put('/instrutores/:id', ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController)), ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController.prototype.atualizarInstrutor)), async function InstrutorController_atualizarInstrutor(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_atualizarInstrutor, request, response });
            const controller = new InstrutorController_1.InstrutorController();
            await templateService.apiHandler({
                methodName: 'atualizarInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsInstrutorController_removerInstrutor = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.delete('/instrutores/:id', ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController)), ...((0, runtime_1.fetchMiddlewares)(InstrutorController_1.InstrutorController.prototype.removerInstrutor)), async function InstrutorController_removerInstrutor(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_removerInstrutor, request, response });
            const controller = new InstrutorController_1.InstrutorController();
            await templateService.apiHandler({
                methodName: 'removerInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCursoController_cadastrarCurso = {
        dto: { "in": "body", "name": "dto", "required": true, "ref": "CursoInsertDto" },
        sucess: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.post('/cursos', ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController)), ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController.prototype.cadastrarCurso)), async function CursoController_cadastrarCurso(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_cadastrarCurso, request, response });
            const controller = new CursoController_1.CursoController();
            await templateService.apiHandler({
                methodName: 'cadastrarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCursoController_filtrarCursoId = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/cursos/:id', ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController)), ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController.prototype.filtrarCursoId)), async function CursoController_filtrarCursoId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_filtrarCursoId, request, response });
            const controller = new CursoController_1.CursoController();
            await templateService.apiHandler({
                methodName: 'filtrarCursoId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCursoController_listarCurso = {
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/cursos', ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController)), ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController.prototype.listarCurso)), async function CursoController_listarCurso(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_listarCurso, request, response });
            const controller = new CursoController_1.CursoController();
            await templateService.apiHandler({
                methodName: 'listarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCursoController_atualizarCurso = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        dto: { "in": "body", "name": "dto", "required": true, "ref": "CursoUpdateDto" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.put('/cursos/:id', ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController)), ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController.prototype.atualizarCurso)), async function CursoController_atualizarCurso(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_atualizarCurso, request, response });
            const controller = new CursoController_1.CursoController();
            await templateService.apiHandler({
                methodName: 'atualizarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCursoController_removerCurso = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.delete('/cursos/:id', ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController)), ...((0, runtime_1.fetchMiddlewares)(CursoController_1.CursoController.prototype.removerCurso)), async function CursoController_removerCurso(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_removerCurso, request, response });
            const controller = new CursoController_1.CursoController();
            await templateService.apiHandler({
                methodName: 'removerCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAlunosController_cadastrarAluno = {
        dto: { "in": "body", "name": "dto", "required": true, "ref": "AlunoInsertDto" },
        sucess: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.post('/alunos', ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController)), ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController.prototype.cadastrarAluno)), async function AlunosController_cadastrarAluno(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_cadastrarAluno, request, response });
            const controller = new AlunoController_1.AlunosController();
            await templateService.apiHandler({
                methodName: 'cadastrarAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAlunosController_filtrarAlunoId = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/alunos/:id', ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController)), ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController.prototype.filtrarAlunoId)), async function AlunosController_filtrarAlunoId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_filtrarAlunoId, request, response });
            const controller = new AlunoController_1.AlunosController();
            await templateService.apiHandler({
                methodName: 'filtrarAlunoId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAlunosController_listarAlunos = {
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.get('/alunos', ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController)), ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController.prototype.listarAlunos)), async function AlunosController_listarAlunos(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_listarAlunos, request, response });
            const controller = new AlunoController_1.AlunosController();
            await templateService.apiHandler({
                methodName: 'listarAlunos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAlunosController_atualizarAluno = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        dto: { "in": "body", "name": "dto", "required": true, "ref": "AlunoUpdateDto" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.put('/alunos/:id', ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController)), ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController.prototype.atualizarAluno)), async function AlunosController_atualizarAluno(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_atualizarAluno, request, response });
            const controller = new AlunoController_1.AlunosController();
            await templateService.apiHandler({
                methodName: 'atualizarAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAlunosController_removerAluno = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        sucess: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
        fail: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
    };
    app.delete('/alunos/:id', ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController)), ...((0, runtime_1.fetchMiddlewares)(AlunoController_1.AlunosController.prototype.removerAluno)), async function AlunosController_removerAluno(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_removerAluno, request, response });
            const controller = new AlunoController_1.AlunosController();
            await templateService.apiHandler({
                methodName: 'removerAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
