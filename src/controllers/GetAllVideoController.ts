import { Request, Response, json } from "express";
import { GetAllVideoService } from "../services/GetAllVideoService";

export class GetAllVideoController{
    async handle(request: Request, response: Response){
        try{
            const service = new GetAllVideoService();
            const videos = await service.execute();
            return response.json(videos);
        }catch(e){
            return response.status(500).json({ erro: `Ocorreu um erro: ${e}` });
        }
    }
}