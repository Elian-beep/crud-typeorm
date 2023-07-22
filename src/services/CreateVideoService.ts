import { connectionSource } from "../database/ormconfig";
import { Category } from "../entities/Category";
import { Video } from '../entities/Video';

type VideoRequest = {
    name: string,
    description: string,
    duration: number
    category_id: string,
}

export class CreateVideoService{
    async execute({ name, description, category_id, duration }: VideoRequest): Promise<Error | Video> {
        const repo = connectionSource.getRepository(Video);
        const repoCategory = connectionSource.getRepository(Category);

        if(!await repoCategory.findOne({where: {id: category_id}})){
            return new Error("Video does not exists!");
        }

        const video = repo.create({ name, description, category_id, duration });

        await repo.save(video);
        return video;
    }
}