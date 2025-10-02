/**
 * UserUpdate - Response que dara un usuario actualizado
 */

export interface UserUpdate{
    name: String;
    lastName: String;
    documentCode: String;
    documentNumber: String;
    phone?: String;
    email: String;
    address: String;
    updatedAt: Date;
    isActive: boolean;
}