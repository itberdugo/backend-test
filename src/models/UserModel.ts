
/**
 * User model - entidad que utilizaremos para la BD
 */
export interface User{
    id: number;
    name: String;
    lastName: String;
    documentTypeCode: String;
    docuemntNumber: String;
    phone?: String;
    email: String;
    address: String;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;

}