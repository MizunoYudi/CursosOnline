/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InstrutorController } from './../controller/InstrutorController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CursoController } from './../controller/CursoController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AlunosController } from './../controller/AlunoController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "InstrutorDto": {
        "dataType": "refObject",
        "properties": {
            "nome": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "especialidade": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"string","required":true},
            "object": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CursoInsertDto": {
        "dataType": "refObject",
        "properties": {
            "titulo": {"dataType":"string","required":true},
            "descricao": {"dataType":"string","required":true},
            "instrutorId": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CursoUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "titulo": {"dataType":"string","required":true},
            "descricao": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlunoInsertDto": {
        "dataType": "refObject",
        "properties": {
            "nome": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "cpf": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AlunoUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "nome": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsInstrutorController_cadastrarInstrutor: Record<string, TsoaRoute.ParameterSchema> = {
                dto: {"in":"body","name":"dto","required":true,"ref":"InstrutorDto"},
                sucess: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.post('/instrutores',
            ...(fetchMiddlewares<RequestHandler>(InstrutorController)),
            ...(fetchMiddlewares<RequestHandler>(InstrutorController.prototype.cadastrarInstrutor)),

            async function InstrutorController_cadastrarInstrutor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_cadastrarInstrutor, request, response });

                const controller = new InstrutorController();

              await templateService.apiHandler({
                methodName: 'cadastrarInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInstrutorController_filtrarInstrutorId: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/instrutores/:id',
            ...(fetchMiddlewares<RequestHandler>(InstrutorController)),
            ...(fetchMiddlewares<RequestHandler>(InstrutorController.prototype.filtrarInstrutorId)),

            async function InstrutorController_filtrarInstrutorId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_filtrarInstrutorId, request, response });

                const controller = new InstrutorController();

              await templateService.apiHandler({
                methodName: 'filtrarInstrutorId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInstrutorController_listarInstrutores: Record<string, TsoaRoute.ParameterSchema> = {
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/instrutores',
            ...(fetchMiddlewares<RequestHandler>(InstrutorController)),
            ...(fetchMiddlewares<RequestHandler>(InstrutorController.prototype.listarInstrutores)),

            async function InstrutorController_listarInstrutores(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_listarInstrutores, request, response });

                const controller = new InstrutorController();

              await templateService.apiHandler({
                methodName: 'listarInstrutores',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInstrutorController_atualizarInstrutor: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                dto: {"in":"body","name":"dto","required":true,"ref":"InstrutorDto"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.put('/instrutores/:id',
            ...(fetchMiddlewares<RequestHandler>(InstrutorController)),
            ...(fetchMiddlewares<RequestHandler>(InstrutorController.prototype.atualizarInstrutor)),

            async function InstrutorController_atualizarInstrutor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_atualizarInstrutor, request, response });

                const controller = new InstrutorController();

              await templateService.apiHandler({
                methodName: 'atualizarInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInstrutorController_removerInstrutor: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.delete('/instrutores/:id',
            ...(fetchMiddlewares<RequestHandler>(InstrutorController)),
            ...(fetchMiddlewares<RequestHandler>(InstrutorController.prototype.removerInstrutor)),

            async function InstrutorController_removerInstrutor(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInstrutorController_removerInstrutor, request, response });

                const controller = new InstrutorController();

              await templateService.apiHandler({
                methodName: 'removerInstrutor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCursoController_cadastrarCurso: Record<string, TsoaRoute.ParameterSchema> = {
                dto: {"in":"body","name":"dto","required":true,"ref":"CursoInsertDto"},
                sucess: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.post('/cursos',
            ...(fetchMiddlewares<RequestHandler>(CursoController)),
            ...(fetchMiddlewares<RequestHandler>(CursoController.prototype.cadastrarCurso)),

            async function CursoController_cadastrarCurso(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_cadastrarCurso, request, response });

                const controller = new CursoController();

              await templateService.apiHandler({
                methodName: 'cadastrarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCursoController_filtrarCursoId: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/cursos/:id',
            ...(fetchMiddlewares<RequestHandler>(CursoController)),
            ...(fetchMiddlewares<RequestHandler>(CursoController.prototype.filtrarCursoId)),

            async function CursoController_filtrarCursoId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_filtrarCursoId, request, response });

                const controller = new CursoController();

              await templateService.apiHandler({
                methodName: 'filtrarCursoId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCursoController_listarCurso: Record<string, TsoaRoute.ParameterSchema> = {
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/cursos',
            ...(fetchMiddlewares<RequestHandler>(CursoController)),
            ...(fetchMiddlewares<RequestHandler>(CursoController.prototype.listarCurso)),

            async function CursoController_listarCurso(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_listarCurso, request, response });

                const controller = new CursoController();

              await templateService.apiHandler({
                methodName: 'listarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCursoController_atualizarCurso: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                dto: {"in":"body","name":"dto","required":true,"ref":"CursoUpdateDto"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.put('/cursos/:id',
            ...(fetchMiddlewares<RequestHandler>(CursoController)),
            ...(fetchMiddlewares<RequestHandler>(CursoController.prototype.atualizarCurso)),

            async function CursoController_atualizarCurso(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_atualizarCurso, request, response });

                const controller = new CursoController();

              await templateService.apiHandler({
                methodName: 'atualizarCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCursoController_removerCurso: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.delete('/cursos/:id',
            ...(fetchMiddlewares<RequestHandler>(CursoController)),
            ...(fetchMiddlewares<RequestHandler>(CursoController.prototype.removerCurso)),

            async function CursoController_removerCurso(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCursoController_removerCurso, request, response });

                const controller = new CursoController();

              await templateService.apiHandler({
                methodName: 'removerCurso',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAlunosController_cadastrarAluno: Record<string, TsoaRoute.ParameterSchema> = {
                dto: {"in":"body","name":"dto","required":true,"ref":"AlunoInsertDto"},
                sucess: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.post('/alunos',
            ...(fetchMiddlewares<RequestHandler>(AlunosController)),
            ...(fetchMiddlewares<RequestHandler>(AlunosController.prototype.cadastrarAluno)),

            async function AlunosController_cadastrarAluno(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_cadastrarAluno, request, response });

                const controller = new AlunosController();

              await templateService.apiHandler({
                methodName: 'cadastrarAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAlunosController_filtrarAlunoId: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/alunos/:id',
            ...(fetchMiddlewares<RequestHandler>(AlunosController)),
            ...(fetchMiddlewares<RequestHandler>(AlunosController.prototype.filtrarAlunoId)),

            async function AlunosController_filtrarAlunoId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_filtrarAlunoId, request, response });

                const controller = new AlunosController();

              await templateService.apiHandler({
                methodName: 'filtrarAlunoId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAlunosController_listarAlunos: Record<string, TsoaRoute.ParameterSchema> = {
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.get('/alunos',
            ...(fetchMiddlewares<RequestHandler>(AlunosController)),
            ...(fetchMiddlewares<RequestHandler>(AlunosController.prototype.listarAlunos)),

            async function AlunosController_listarAlunos(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_listarAlunos, request, response });

                const controller = new AlunosController();

              await templateService.apiHandler({
                methodName: 'listarAlunos',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAlunosController_atualizarAluno: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                dto: {"in":"body","name":"dto","required":true,"ref":"AlunoUpdateDto"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.put('/alunos/:id',
            ...(fetchMiddlewares<RequestHandler>(AlunosController)),
            ...(fetchMiddlewares<RequestHandler>(AlunosController.prototype.atualizarAluno)),

            async function AlunosController_atualizarAluno(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_atualizarAluno, request, response });

                const controller = new AlunosController();

              await templateService.apiHandler({
                methodName: 'atualizarAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAlunosController_removerAluno: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"double"},
                sucess: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
                fail: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
        };
        app.delete('/alunos/:id',
            ...(fetchMiddlewares<RequestHandler>(AlunosController)),
            ...(fetchMiddlewares<RequestHandler>(AlunosController.prototype.removerAluno)),

            async function AlunosController_removerAluno(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAlunosController_removerAluno, request, response });

                const controller = new AlunosController();

              await templateService.apiHandler({
                methodName: 'removerAluno',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
