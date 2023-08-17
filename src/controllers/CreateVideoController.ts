import { Request, Response, json } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController{
    async handle(request: Request, response: Response){
        try{
            const { name, description, category_id, duration } = request.body;
            const service = new CreateVideoService();
    
            const result = await service.execute({
                name, description, category_id, duration
            });
    
            if(result instanceof Error){
                return response.status(400).json(result.message);
            }
    
            return response.status(200).json(result);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}