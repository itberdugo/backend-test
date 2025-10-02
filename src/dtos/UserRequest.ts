/**
 * UserRequest - Request para la creación de un usuario
 */

export interface UserRequest{
    name: String;
    lastName: String;
    documentCode: String;
    documentNumber: String;
    phone?: String;
    email: String;
    address: String;
}