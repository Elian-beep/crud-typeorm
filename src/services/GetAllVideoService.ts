import { connectionSource } from "../database/ormconfig";
import { Video } from '../entities/Video';

export class GetAllVideoService{
    async execute(){
        const repo = connectionSource.getRepository(Video);
        const videos = await repo.find({ relations: ['category'] });
        return videos;
    }
}