import pool from "../config/database.js";
import type { DocumentType } from "../models/DocumentType.js";

export class DocumentTypeRepository{

    async findAll(): Promise<DocumentType[]>{

        const query = `
                    SELECT * FROM document_type
                    `;
            const result = await pool.query(query);

        return result.rows as DocumentType[];
    }
}