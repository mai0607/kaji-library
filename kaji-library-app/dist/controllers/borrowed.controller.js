"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BorrowedController = class BorrowedController {
    constructor(borrowedRepository) {
        this.borrowedRepository = borrowedRepository;
    }
    async create(borrowed) {
        return this.borrowedRepository.create(borrowed);
    }
    async count(where) {
        return this.borrowedRepository.count(where);
    }
    async find(filter) {
        return this.borrowedRepository.find(filter);
    }
    async updateAll(borrowed, where) {
        return this.borrowedRepository.updateAll(borrowed, where);
    }
    async findById(id, filter) {
        return this.borrowedRepository.findById(id, filter);
    }
    async updateById(id, borrowed) {
        await this.borrowedRepository.updateById(id, borrowed);
    }
    async replaceById(id, borrowed) {
        await this.borrowedRepository.replaceById(id, borrowed);
    }
    async deleteById(id) {
        await this.borrowedRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/borroweds', {
        responses: {
            '200': {
                description: 'Borrowed model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Borrowed) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Borrowed, {
                    title: 'NewBorrowed',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/borroweds/count', {
        responses: {
            '200': {
                description: 'Borrowed model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Borrowed)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/borroweds', {
        responses: {
            '200': {
                description: 'Array of Borrowed model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Borrowed, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Borrowed)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/borroweds', {
        responses: {
            '200': {
                description: 'Borrowed PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Borrowed, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Borrowed)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Borrowed, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/borroweds/{id}', {
        responses: {
            '200': {
                description: 'Borrowed model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Borrowed, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Borrowed, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/borroweds/{id}', {
        responses: {
            '204': {
                description: 'Borrowed PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Borrowed, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Borrowed]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/borroweds/{id}', {
        responses: {
            '204': {
                description: 'Borrowed PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Borrowed]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/borroweds/{id}', {
        responses: {
            '204': {
                description: 'Borrowed DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BorrowedController.prototype, "deleteById", null);
BorrowedController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.BorrowedRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BorrowedRepository])
], BorrowedController);
exports.BorrowedController = BorrowedController;
//# sourceMappingURL=borrowed.controller.js.map