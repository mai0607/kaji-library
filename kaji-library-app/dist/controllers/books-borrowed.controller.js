"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksBorrowedController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BooksBorrowedController = class BooksBorrowedController {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    async find(id, filter) {
        return this.booksRepository.borroweds(id).find(filter);
    }
    async create(id, borrowed) {
        return this.booksRepository.borroweds(id).create(borrowed);
    }
    async patch(id, borrowed, where) {
        return this.booksRepository.borroweds(id).patch(borrowed, where);
    }
    async delete(id, where) {
        return this.booksRepository.borroweds(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/books/{id}/borroweds', {
        responses: {
            '200': {
                description: 'Array of Books has many Borrowed',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Borrowed) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksBorrowedController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/books/{id}/borroweds', {
        responses: {
            '200': {
                description: 'Books model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Borrowed) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Borrowed, {
                    title: 'NewBorrowedInBooks',
                    exclude: ['id'],
                    optional: ['booksId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksBorrowedController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/books/{id}/borroweds', {
        responses: {
            '200': {
                description: 'Books.Borrowed PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
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
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Borrowed))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksBorrowedController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/books/{id}/borroweds', {
        responses: {
            '200': {
                description: 'Books.Borrowed DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Borrowed))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BooksBorrowedController.prototype, "delete", null);
BooksBorrowedController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.BooksRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.BooksRepository])
], BooksBorrowedController);
exports.BooksBorrowedController = BooksBorrowedController;
//# sourceMappingURL=books-borrowed.controller.js.map