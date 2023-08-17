import { Request, Response } from 'express';
import { GetAllCategoryService } from '../services/GetAllCategoryService';

export class GetAllCategoryController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllCategoryService();
            const categories = await service.execute();
            return response.json(categories);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}