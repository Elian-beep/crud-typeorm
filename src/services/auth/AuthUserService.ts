import { connectionSource } from "../../database/ormconfig"
import { User } from "../../entities/User";
import bcrypt from 'bcrypt';
import { TokenService } from "./TokenService";

type DataAuth = {
    name_user: string,
    password: string
}

export class AuthUserService{
    async execute({ name_user, password }: DataAuth){
        const repo = connectionSource.getRepository(User);
        const user = await repo.find({ where: {name_user} });

        if(!user)
            return new Error(`Incorrect username or password!`);
        const realPassword = await bcrypt.compare(password, user[0].password) ? true : false;
        
        if(!realPassword)
            return new Error(`Authentication error!`);

        const tokenService = new TokenService();
        const token = tokenService.generate(user[0].id);
        return token;
    }
}