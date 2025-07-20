"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AlunoController_1 = require("./../controller/AlunoController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
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
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
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
