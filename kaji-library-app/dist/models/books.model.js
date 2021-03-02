"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const borrowed_model_1 = require("./borrowed.model");
let Books = class Books extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "author", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Books.prototype, "isbn", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], Books.prototype, "tags", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => borrowed_model_1.Borrowed),
    tslib_1.__metadata("design:type", Array)
], Books.prototype, "borroweds", void 0);
Books = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Books);
exports.Books = Books;
//# sourceMappingURL=books.model.js.map