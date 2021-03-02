import { DefaultCrudRepository } from '@loopback/repository';
import { Borrowed, BorrowedRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class BorrowedRepository extends DefaultCrudRepository<Borrowed, typeof Borrowed.prototype.id, BorrowedRelations> {
    constructor(dataSource: DbDataSource);
}
