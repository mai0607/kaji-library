import { Entity } from '@loopback/repository';
import { Borrowed } from './borrowed.model';
export declare class Books extends Entity {
    id: string;
    title: string;
    author: string;
    isbn: string;
    tags?: string[];
    borroweds: Borrowed[];
    constructor(data?: Partial<Books>);
}
export interface BooksRelations {
}
export declare type BooksWithRelations = Books & BooksRelations;
