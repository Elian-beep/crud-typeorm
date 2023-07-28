import { connectionSource } from "../database/ormconfig";
import { User } from "../entities/User";
import bcrypt from 'bcrypt';

type UserRequest = {
    id: string;
    name: string;
    name_user: string;
    email: string;
    password: string;
}

export class CreateUserService{
    async execute({ name, name_user, email, password }: UserRequest): Promise<User | Error >{
        const repo = connectionSource.getRepository(User);

        if(await repo.findOne({ where: { name } }))
            return new Error("Name already exists!");
        if(await repo.findOne({ where: { name_user } }))
            return new Error("Name already exists!");
        if(await repo.findOne({ where: { email } }))
            return new Error("Name already exists!");

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt)

        const user = repo.create({
            name, name_user, email, password: passwordHash
        });

        await repo.save(user);
        return user;
    }
}