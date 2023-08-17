import { Request, Response } from 'express';
import { GetAllUserService } from '../services/GetAllUserService';

export class GetAllUserController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllUserService();
            const users = await service.execute();
            return response.json(users);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}