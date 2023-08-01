import { connectionSource } from "../database/ormconfig";
import { User } from "../entities/User";

type UserUpdateRequest = {
    id: string;
    name: string;
    name_user: string;
    email: string;
}

export class UpdateUserService{
    async execute({ id, name, name_user, email }: UserUpdateRequest){
        const repo = connectionSource.getRepository(User);

        const user = await repo.findOne({ where: {id} });

        if(!user){
            return new Error("User does not exists");
        }

        user.name = name ? name : user.name;
        user.name_user = name_user ? name_user : user.name_user;
        user.email = email ? email : user.email;

        await repo.save(user);
        user.password = '';
        return user;
    }
}