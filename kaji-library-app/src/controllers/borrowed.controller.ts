import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Borrowed} from '../models';
import {BorrowedRepository} from '../repositories';

export class BorrowedController {
  constructor(
    @repository(BorrowedRepository)
    public borrowedRepository : BorrowedRepository,
  ) {}

  @post('/borroweds', {
    responses: {
      '200': {
        description: 'Borrowed model instance',
        content: {'application/json': {schema: getModelSchemaRef(Borrowed)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {
            title: 'NewBorrowed',
            exclude: ['id'],
          }),
        },
      },
    })
    borrowed: Omit<Borrowed, 'id'>,
  ): Promise<Borrowed> {
    return this.borrowedRepository.create(borrowed);
  }

  @get('/borroweds/count', {
    responses: {
      '200': {
        description: 'Borrowed model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Borrowed) where?: Where<Borrowed>,
  ): Promise<Count> {
    return this.borrowedRepository.count(where);
  }

  @get('/borroweds', {
    responses: {
      '200': {
        description: 'Array of Borrowed model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Borrowed, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Borrowed) filter?: Filter<Borrowed>,
  ): Promise<Borrowed[]> {
    return this.borrowedRepository.find(filter);
  }

  @patch('/borroweds', {
    responses: {
      '200': {
        description: 'Borrowed PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {partial: true}),
        },
      },
    })
    borrowed: Borrowed,
    @param.where(Borrowed) where?: Where<Borrowed>,
  ): Promise<Count> {
    return this.borrowedRepository.updateAll(borrowed, where);
  }

  @get('/borroweds/{id}', {
    responses: {
      '200': {
        description: 'Borrowed model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Borrowed, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Borrowed, {exclude: 'where'}) filter?: FilterExcludingWhere<Borrowed>
  ): Promise<Borrowed> {
    return this.borrowedRepository.findById(id, filter);
  }

  @patch('/borroweds/{id}', {
    responses: {
      '204': {
        description: 'Borrowed PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Borrowed, {partial: true}),
        },
      },
    })
    borrowed: Borrowed,
  ): Promise<void> {
    await this.borrowedRepository.updateById(id, borrowed);
  }

  @put('/borroweds/{id}', {
    responses: {
      '204': {
        description: 'Borrowed PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() borrowed: Borrowed,
  ): Promise<void> {
    await this.borrowedRepository.replaceById(id, borrowed);
  }

  @del('/borroweds/{id}', {
    responses: {
      '204': {
        description: 'Borrowed DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.borrowedRepository.deleteById(id);
  }
}
