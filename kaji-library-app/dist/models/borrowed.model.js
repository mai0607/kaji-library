"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrowed = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Borrowed = class Borrowed extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
        defaultFn: 'uuidv4',
    }),
    tslib_1.__metadata("design:type", String)
], Borrowed.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        defaultFn: "now",
    }),
    tslib_1.__metadata("design:type", String)
], Borrowed.prototype, "borrowingStartDate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Borrowed.prototype, "borrowingEndDate", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Borrowed.prototype, "hasReturned", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Borrowed.prototype, "usersId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Borrowed.prototype, "booksId", void 0);
Borrowed = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Borrowed);
exports.Borrowed = Borrowed;
//# sourceMappingURL=borrowed.model.js.map