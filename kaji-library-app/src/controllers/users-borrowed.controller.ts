import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Users,
  Borrowed,
} from '../models';
import {UsersRepository} from '../repositories';

export class UsersBorrowedController {
  constructor(
    @repository(UsersRepository) protected usersRepository: UsersRepository,
  ) { }

  @get('/users/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Array of Users has many Borrowed',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Borrowed)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Borrowed>,
  ): Promise<Borrowed[]> {
    return this.usersRepository.borroweds(id).find(filter);
  }

  @post('/users/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Users model instance',
        content: {'application/json': {schema: getModelSchemaRef(Borrowed)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Users.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {
            title: 'NewBorrowedInUsers',
            exclude: ['id'],
            optional: ['usersId']
          }),
        },
      },
    }) borrowed: Omit<Borrowed, 'id'>,
  ): Promise<Borrowed> {
    return this.usersRepository.borroweds(id).create(borrowed);
  }

  @patch('/users/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Users.Borrowed PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {partial: true}),
        },
      },
    })
    borrowed: Partial<Borrowed>,
    @param.query.object('where', getWhereSchemaFor(Borrowed)) where?: Where<Borrowed>,
  ): Promise<Count> {
    return this.usersRepository.borroweds(id).patch(borrowed, where);
  }

  @del('/users/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Users.Borrowed DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Borrowed)) where?: Where<Borrowed>,
  ): Promise<Count> {
    return this.usersRepository.borroweds(id).delete(where);
  }
}
