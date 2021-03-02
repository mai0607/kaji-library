import {Entity, model, property, hasMany} from '@loopback/repository';
import {Borrowed} from './borrowed.model';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
  })
  slackName: string;

  @hasMany(() => Borrowed)
  borroweds: Borrowed[];

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
