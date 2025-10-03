import type {Request, Response} from "express";
import { DocumentTypeRepository } from "../repositories/DocumentTypeRepository.js";

export class DocumentTypeController{
    constructor(private repository: DocumentTypeRepository){}

    async getAll(req: Request, res: Response): Promise<void>{

        const documentType = await this.repository.findAll();

        res.status(200).json({
            success: true,
            data: documentType
        })
    } 
}

export const documentTypeRepository = new DocumentTypeRepository()
