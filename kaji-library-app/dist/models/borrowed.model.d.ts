import { Entity } from '@loopback/repository';
export declare class Borrowed extends Entity {
    id: string;
    borrowingStartDate: string;
    borrowingEndDate?: string;
    hasReturned?: boolean;
    usersId?: string;
    booksId?: string;
    constructor(data?: Partial<Borrowed>);
}
export interface BorrowedRelations {
}
export declare type BorrowedWithRelations = Borrowed & BorrowedRelations;
