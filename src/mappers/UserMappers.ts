import type { UserResponse } from "../dtos/UserResponse.js";
import type { UserModel } from "../models/UserModel.js";

export class UserMapper{

    static toResponse(user: UserModel): UserResponse{
        return {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            documentCode: user.documentTypeCode,
            documentNumber: user.documentNumber,
            phone: user.phone,
            email: user.email,
            address: user.address,
            createdAt: user.createdAt,
            isActive: user.isActive,
        }
    }
}