import { connectionSource } from "../database/ormconfig";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCategoryService{
    async execute({ id, name, description }: CategoryUpdateRequest){
        const repo = connectionSource.getRepository(Category);

        const category = await repo.findOne({where: { id: id }});
        

        if(!category){
            return new Error("Category does not exists");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);
        
        return category;
    }
}