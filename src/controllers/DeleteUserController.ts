import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';

export class DeleteUserController{
    async handle(request: Request, response: Response){
        try{
            const { id } = request.params;
            const service = new DeleteUserService();
            const result = await service.execute(id);
    
            if(result instanceof Error){
                return response.status(400).json(result.message);
            }
    
            return response.status(204).end();
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}