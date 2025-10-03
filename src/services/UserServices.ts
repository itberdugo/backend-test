import type { UserRequest } from "../dtos/UserRequest.js";
import type { UserResponse } from "../dtos/UserResponse.js";
import type { UserUpdate } from "../dtos/UserUpdate.js";
import { UserMapper } from "../mappers/UserMappers.js";
import type { UserModel } from "../models/UserModel.js";
import { userRepository, UserRepositoryImp } from "../repositories/UserRepositoryImp.js";

export class UserServices{

    constructor (private repository: UserRepositoryImp){}

    async createUser(userRequest: UserRequest): Promise<UserResponse>{
        
        const user = await this.repository.save(userRequest);

        return UserMapper.toResponse(user);
    }

    async getAll(): Promise<UserResponse[]>{

        const users:UserModel[] = await this.repository.findAll();

        return users.map((user)=> UserMapper.toResponse(user));
    }


    async getById(id: number): Promise<UserResponse | null>{
       
        this.validateId(id);

        const user = await this.repository.findById(id);
        
        if(!user){
            return null;
        }

        return UserMapper.toResponse(user);
    }

    async update(id:number, userUpdate: UserUpdate): Promise<UserResponse | null>{

       

        const user = await this.repository.update(id,userUpdate);

         if(!user){
            return null;
        };
        return UserMapper.toResponse(user);

    }
    

    async delete(id: number): Promise<boolean>{

        this.validateId(id);

        return await this.repository.delete(id);

    }


    private validateId(id:number):boolean{
        if(id<=0){
            throw new Error("ID not fount");
        }
        return true;
    }
}

export const userService = new UserServices(userRepository)
