import type {Request, Response} from "express";
import { userService, UserServices } from "../services/UserServices.js";
import type { UserRequest } from "../dtos/UserRequest.js";
import type { UserUpdate } from "../dtos/UserUpdate.js";
export class UserController{

    constructor(private userService: UserServices){}

    async save(req: Request, res: Response): Promise<void> {    
      try{
        const userData: UserRequest = req.body;

            if(!userData.name || !userData.lastName || !userData.documentCode ||
                !userData.documentNumber || !userData.email || !userData.address
            ){
                 res.status(400).json({
                    success: false,
                    message: 'Missing parameters to complete the request '
                });
                return;
            }

        const user = await this.userService.createUser(userData);    
        
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        });
      }catch(error){
        res.status(500).json({
             success: false,
             message: 'Error creating user'
        });
      }
    }

    async findAll(req: Request, res: Response): Promise<void>{
        try{
            const users = await this.userService.getAll();

            res.status(200).json({
            success: true,
            data: users
            });

        }catch(error){
            res.status(500).json({
             success: false,
             message: 'Error finding users'
            });
        }
    }

    async findById(req: Request, res: Response): Promise<void>{
        try{
            const id = Number.parseInt(req.params.id);
            const userById = await this.userService.getById(id);

            if(!userById){
                    res.status(400).json({
                    success: false,
                    message: 'user not fount'
                });
                return;
            }

            res.status(200).json({
                success: true,
                data: userById
            });

        }catch(error){
             res.status(500).json({
             success: false,
             message: 'Error finding user'
            });
        }
    }

    async update(req: Request, res: Response): Promise<void>{
        try{
            const id = Number.parseInt(req.params.id);
            const updateData: UserUpdate = req.body;

            const userUpdate = await this.userService.update(id,updateData);    
            
            if(!userUpdate){
                 res.status(400).json({
                    success: false,
                    message: 'user not fount - user not updated'
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: 'user updated successfully',
                data: userUpdate
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message: 'Error updating user'
            });
        }
    }

    async delete(req: Request, res: Response): Promise<void>{
        try{
            const id = Number.parseInt(req.params.id);
            const userDelete = await this.userService.delete(id);

            if(!userDelete){
                res.status(400).json({
                        success: false,
                        message: 'user not fount - user not updated'
                    });
                return;
            }

            res.status(200).json({
                success: true,
                message: 'user updated successfully',
                data: userDelete
            });
        }catch(error){
              res.status(500).json({
                success: false,
                message: 'Error deleting user'
            });
        }
    }

}

export const userController = new UserController(userService);

