import pool from "../config/database.js";
import type { UserRequest } from "../dtos/UserRequest.js";
import type { UserResponse } from "../dtos/UserResponse.js";
import type { UserUpdate } from "../dtos/UserUpdate.js";
import type { UserModel } from "../models/UserModel.js";
import type { IUserRepository } from "./IUserRepository.js";

export class UserRepositoryImp implements IUserRepository{


    async save(user: UserRequest): Promise<UserModel> {
        const query = `
                    INSERT INTO users (
                            name,
                            last_name,
                            document_type_fk,
                            document_number,
                            phone,
                            email,
                            address
                        ) Values ($1,$2,$3,$4,$5,$6,$7)
                        RETURNING *
                    `;

                    const result = await pool.query( query, [
                        user.name,
                        user.lastName,
                        user.documentCode,
                        user.documentNumber,
                        user.phone,
                        user.email,
                        user.address
                    ]);

                    return this.mapRowToUser(result.rows[0]);
    }
   
    async findAll(): Promise<UserModel[]> {
         const query = `
                    SELECT * FROM users 
                        ORDER BY create_at DESC 
                    `;
                    const result = await pool.query(query);

        return result.rows.map((row) => this.mapRowToUser(row));
    }
    

    async findById(id: number): Promise<UserModel | null> {
        const query = `
                    SELECT * FROM users 
                        WHERE id = $1
                    `;
                    const result = await pool.query(query, [id]);

                    if(result.rows.length == 0){
                        return null;
                    }

        return this.mapRowToUser(result.rows[0]);
    }


    async update(id: number, user: UserUpdate): Promise<UserModel | null> {

        const query = `
                        UPDATE users 
                        SET
                            name=$1,
                            last_name = $2,  
                            document_type_fk = $3, 
                            document_number = $4,
                            phone = $5,
                            email = $6,
                            address =  $7,
                            update_at = CURRENT_TIMESTAMP
                        WHERE id = $8
                        RETURNING *
                    `;

                     const result = await pool.query( query, [
                        user.name,
                        user.lastName,
                        user.documentCode,
                        user.documentNumber,
                        user.phone,
                        user.email,
                        user.address,
                        id,
                    ]);
      
                       if(result.rows.length == 0){
                        return null;
                    }

        return this.mapRowToUser(result.rows[0]);

    }



    async delete(id: number): Promise<boolean> {
         const query = `
                        UPDATE users 
                        SET is_active = false,
                            updated_at = CURRENT_TIMESTAMP
                        WHERE id = $1 AND is_active = true    
                    `;
            const result = await pool.query(query, [id]);

        return  result.rowCount !== null && result.rowCount > 0;         
    }

    private mapRowToUser(arg0: any): UserModel {
        return {
            id: arg0.id,
            name: arg0.name,
            lastName: arg0.last_name,
            documentTypeCode: arg0.document_type_code,
            documentNumber: arg0.document_number,
            phone: arg0.phone,
            email: arg0.email,
            address: arg0.address,
            createdAt: arg0.created_at,
            updatedAt: arg0.updated_at,
            isActive: arg0.is_active,
        }
    }
}

export const userRepository = new UserRepositoryImp();
