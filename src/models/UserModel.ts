
/**
 * User model - entidad que utilizaremos para la BD
 */
export interface UserModel{
    id: number;
    name: String;
    lastName: String;
    documentTypeCode: String;
    documentNumber: String;
    phone?: String;
    email: String;
    address: String;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}




