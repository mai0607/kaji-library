import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Books, BooksRelations, Borrowed } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { BorrowedRepository } from './borrowed.repository';
export declare class BooksRepository extends DefaultCrudRepository<Books, typeof Books.prototype.id, BooksRelations> {
    protected borrowedRepositoryGetter: Getter<BorrowedRepository>;
    readonly borroweds: HasManyRepositoryFactory<Borrowed, typeof Books.prototype.id>;
    constructor(dataSource: DbDataSource, borrowedRepositoryGetter: Getter<BorrowedRepository>);
}
