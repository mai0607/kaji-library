import { Count, Filter, Where } from '@loopback/repository';
import { Books, Borrowed } from '../models';
import { BooksRepository } from '../repositories';
export declare class BooksBorrowedController {
    protected booksRepository: BooksRepository;
    constructor(booksRepository: BooksRepository);
    find(id: string, filter?: Filter<Borrowed>): Promise<Borrowed[]>;
    create(id: typeof Books.prototype.id, borrowed: Omit<Borrowed, 'id'>): Promise<Borrowed>;
    patch(id: string, borrowed: Partial<Borrowed>, where?: Where<Borrowed>): Promise<Count>;
    delete(id: string, where?: Where<Borrowed>): Promise<Count>;
}
