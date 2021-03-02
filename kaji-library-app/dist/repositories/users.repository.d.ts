import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Users, UsersRelations, Borrowed } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { BorrowedRepository } from './borrowed.repository';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    protected borrowedRepositoryGetter: Getter<BorrowedRepository>;
    readonly borroweds: HasManyRepositoryFactory<Borrowed, typeof Users.prototype.id>;
    constructor(dataSource: DbDataSource, borrowedRepositoryGetter: Getter<BorrowedRepository>);
}
