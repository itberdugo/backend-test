/**
 * UserResponse - Response que dara del usuario
 */

export interface UserResponse{
    id: number,
    name: String;
    lastName: String;
    documentCode: String;
    documentNumber: String;
    phone?: String;
    email: String;
    address: String;
    createdAt: Date;
    isActive: boolean;
}