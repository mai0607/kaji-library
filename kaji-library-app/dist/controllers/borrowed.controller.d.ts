import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Borrowed } from '../models';
import { BorrowedRepository } from '../repositories';
export declare class BorrowedController {
    borrowedRepository: BorrowedRepository;
    constructor(borrowedRepository: BorrowedRepository);
    create(borrowed: Omit<Borrowed, 'id'>): Promise<Borrowed>;
    count(where?: Where<Borrowed>): Promise<Count>;
    find(filter?: Filter<Borrowed>): Promise<Borrowed[]>;
    updateAll(borrowed: Borrowed, where?: Where<Borrowed>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Borrowed>): Promise<Borrowed>;
    updateById(id: string, borrowed: Borrowed): Promise<void>;
    replaceById(id: string, borrowed: Borrowed): Promise<void>;
    deleteById(id: string): Promise<void>;
}
