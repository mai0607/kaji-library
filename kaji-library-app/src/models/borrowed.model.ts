import {Entity, model, property} from '@loopback/repository';

@model()
export class Borrowed extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id: string;

  @property({
    type: 'date',
    defaultFn: "now",
  })
  borrowingStartDate: string;

  @property({
    type: 'date',
    //defaultFn: "now",
  })
  borrowingEndDate?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  hasReturned?: boolean;

  @property({
    type: 'string',
  })
  usersId?: string;

  @property({
    type: 'string',
  })
  booksId?: string;

  constructor(data?: Partial<Borrowed>) {
    super(data);
  }
}

export interface BorrowedRelations {
  // describe navigational properties here
}

export type BorrowedWithRelations = Borrowed & BorrowedRelations;
