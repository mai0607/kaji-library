import {DefaultCrudRepository} from '@loopback/repository';
import {Borrowed, BorrowedRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BorrowedRepository extends DefaultCrudRepository<
  Borrowed,
  typeof Borrowed.prototype.id,
  BorrowedRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Borrowed, dataSource);
  }
}
