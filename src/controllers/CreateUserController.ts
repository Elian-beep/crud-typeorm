import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController{
    async handle(request: Request, response: Response){
        try{
            const { name, name_user, email, password } = request.body;
            const service = new CreateUserService();
            const result = await service.execute({ name, name_user, email, password });
    
            if(result instanceof Error){
                return response.status(400).json(result.message);
            }
    
            return response.json(result);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}