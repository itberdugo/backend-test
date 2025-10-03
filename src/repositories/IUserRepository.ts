import type { UserRequest } from '../dtos/UserRequest.js';
import type { UserUpdate } from '../dtos/UserUpdate.js';
import  type { UserModel }  from '../models/UserModel.js';
export interface IUserRepository{

    save( user: UserRequest): Promise<UserModel>;
    findAll(): Promise<UserModel[]>;
    findById(id: number): Promise<UserModel | null>;
    update(id: number, userUpdate: UserUpdate): Promise<UserModel | null>;
    delete(id: number): Promise<boolean>;
}