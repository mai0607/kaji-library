import {Entity, model, property, hasMany} from '@loopback/repository';
import {Borrowed} from './borrowed.model';

@model()
export class Books extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
  })
  title: string;

  @property({
    type: 'string',
  })
  author: string;

  @property({
    type: 'string',
  })
  isbn: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tags?: string[];

  @hasMany(() => Borrowed)
  borroweds: Borrowed[];

  constructor(data?: Partial<Books>) {
    super(data);
  }
}

export interface BooksRelations {
  // describe navigational properties here
}

export type BooksWithRelations = Books & BooksRelations;
