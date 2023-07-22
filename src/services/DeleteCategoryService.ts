import { connectionSource } from "../database/ormconfig";
import { Category } from "../entities/Category";

export class DeleteCategoryService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Category);

        if(!(await repo.findOne({where: { id: id }}))){
            return new Error("Category does not exists!");
        }

        await repo.delete(id);
    }
}