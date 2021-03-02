import { Count, Filter, Where } from '@loopback/repository';
import { Users, Borrowed } from '../models';
import { UsersRepository } from '../repositories';
export declare class UsersBorrowedController {
    protected usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository);
    find(id: string, filter?: Filter<Borrowed>): Promise<Borrowed[]>;
    create(id: typeof Users.prototype.id, borrowed: Omit<Borrowed, 'id'>): Promise<Borrowed>;
    patch(id: string, borrowed: Partial<Borrowed>, where?: Where<Borrowed>): Promise<Count>;
    delete(id: string, where?: Where<Borrowed>): Promise<Count>;
}
