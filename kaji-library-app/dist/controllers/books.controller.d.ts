import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Books } from '../models';
import { BooksRepository } from '../repositories';
export declare class BooksController {
    booksRepository: BooksRepository;
    constructor(booksRepository: BooksRepository);
    create(books: Books): Promise<Books>;
    count(where?: Where<Books>): Promise<Count>;
    find(filter?: Filter<Books>): Promise<Books[]>;
    updateAll(books: Books, where?: Where<Books>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Books>): Promise<Books>;
    updateById(id: string, books: Books): Promise<void>;
    replaceById(id: string, books: Books): Promise<void>;
    deleteById(id: string): Promise<void>;
}
