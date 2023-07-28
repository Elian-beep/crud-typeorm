import { connectionSource } from "../database/ormconfig";
import { User } from "../entities/User";

export class GetAllUserService{
    async execute(){
        const repo = connectionSource.getRepository(User);

        const users = await repo.find({ select: ["id", "name", "email", "name_user"] });
        return users;
    }
}