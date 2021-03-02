"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let BooksRepository = class BooksRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, borrowedRepositoryGetter) {
        super(models_1.Books, dataSource);
        this.borrowedRepositoryGetter = borrowedRepositoryGetter;
        this.borroweds = this.createHasManyRepositoryFactoryFor('borroweds', borrowedRepositoryGetter);
        this.registerInclusionResolver('borroweds', this.borroweds.inclusionResolver);
    }
};
BooksRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db')), tslib_1.__param(1, repository_1.repository.getter('BorrowedRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbDataSource, Function])
], BooksRepository);
exports.BooksRepository = BooksRepository;
//# sourceMappingURL=books.repository.js.map