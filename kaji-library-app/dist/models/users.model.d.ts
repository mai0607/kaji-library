import { Entity } from '@loopback/repository';
import { Borrowed } from './borrowed.model';
export declare class Users extends Entity {
    id: string;
    slackName: string;
    borroweds: Borrowed[];
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;
