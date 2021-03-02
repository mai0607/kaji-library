import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Users, UsersRelations, Borrowed} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BorrowedRepository} from './borrowed.repository';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.id,
  UsersRelations
> {

  public readonly borroweds: HasManyRepositoryFactory<Borrowed, typeof Users.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('BorrowedRepository') protected borrowedRepositoryGetter: Getter<BorrowedRepository>,
  ) {
    super(Users, dataSource);
    this.borroweds = this.createHasManyRepositoryFactoryFor('borroweds', borrowedRepositoryGetter,);
    this.registerInclusionResolver('borroweds', this.borroweds.inclusionResolver);
  }
}
