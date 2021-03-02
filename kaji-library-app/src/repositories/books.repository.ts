import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Books, BooksRelations, Borrowed} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BorrowedRepository} from './borrowed.repository';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.id,
  BooksRelations
> {

  public readonly borroweds: HasManyRepositoryFactory<Borrowed, typeof Books.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('BorrowedRepository') protected borrowedRepositoryGetter: Getter<BorrowedRepository>,
  ) {
    super(Books, dataSource);
    this.borroweds = this.createHasManyRepositoryFactoryFor('borroweds', borrowedRepositoryGetter,);
    this.registerInclusionResolver('borroweds', this.borroweds.inclusionResolver);
  }
}
