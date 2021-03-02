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
  Books,
  Borrowed,
} from '../models';
import {BooksRepository} from '../repositories';

export class BooksBorrowedController {
  constructor(
    @repository(BooksRepository) protected booksRepository: BooksRepository,
  ) { }

  @get('/books/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Array of Books has many Borrowed',
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
    return this.booksRepository.borroweds(id).find(filter);
  }

  @post('/books/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Books model instance',
        content: {'application/json': {schema: getModelSchemaRef(Borrowed)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Books.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {
            title: 'NewBorrowedInBooks',
            exclude: ['id'],
            optional: ['booksId']
          }),
        },
      },
    }) borrowed: Omit<Borrowed, 'id'>,
  ): Promise<Borrowed> {
    return this.booksRepository.borroweds(id).create(borrowed);
  }

  @patch('/books/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Books.Borrowed PATCH success count',
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
    return this.booksRepository.borroweds(id).patch(borrowed, where);
  }

  @del('/books/{id}/borroweds', {
    responses: {
      '200': {
        description: 'Books.Borrowed DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Borrowed)) where?: Where<Borrowed>,
  ): Promise<Count> {
    return this.booksRepository.borroweds(id).delete(where);
  }
}
