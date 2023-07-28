import { connectionSource } from "../database/ormconfig";
import { User } from "../entities/User";

export class DeleteUserService{
    async execute(id: string){
        const repo = connectionSource.getRepository(User);

        if(!(await repo.findOne({where: {id}}))){
            return new Error("User does not exists!")
        }

        await repo.delete(id);
    }
}