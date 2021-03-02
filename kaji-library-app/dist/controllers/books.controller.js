"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BooksController = class BooksController {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async create(books) {
        return this.booksRepository.create(books);
    }
    async count(where) {
        return this.booksRepository.count(where);
    }
    async find(filter) {
        return this.booksRepository.find(filter);
    }
    async updateAll(books, where) {
        return this.booksRepository.updateAll(books, where);
    }
    async findById(id, filter) {
        return this.booksRepository.findById(id, filter);
    }
    async updateById(id, books) {
        await this.booksRepository.updateById(id, books);
    }
    async replaceById(id, books) {
        await this.booksRepository.replaceById(id, books);
    }
    async deleteById(id) {
        await this.booksRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/books', {
        responses: {
            '200': {
                description: 'Books model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Books) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, {
                    title: 'NewBooks',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Books]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/books/count', {
        responses: {
            '200': {
                description: 'Books model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/books', {
        responses: {
            '200': {
                description: 'Array of Books model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Books, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/books', {
        responses: {
            '200': {
                description: 'Books PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Books)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Books, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/books/{id}', {
        responses: {
            '200': {
                description: 'Books model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Books, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Books, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/books/{id}', {
        responses: {
            '204': {
                description: 'Books PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Books, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Books]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/books/{id}', {
        responses: {
            '204': {
                description: 'Books PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Books]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/books/{id}', {
        responses: {
            '204': {
                description: 'Books DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksController.prototype, "deleteById", null);
BooksController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.BooksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BooksRepository])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map