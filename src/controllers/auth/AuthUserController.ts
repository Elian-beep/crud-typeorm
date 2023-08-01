import { Request, Response, json } from "express";
import { AuthUserService } from "../../services/auth/AuthUserService";

export class AuthUserController{
    async handle(request: Request, response: Response){
        const { name_user, password } = request.body;
        const service = new AuthUserService();

        const result = await service.execute({
            name_user, password
        });

        if(result instanceof Error)
            return response.status(500).json(result.message);

        return response.status(200).json(result);
    }
}