import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideoController } from './controllers/GetAllVideoController';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { AuthUserController } from './controllers/auth/AuthUserController';
import { TokenController } from './controllers/auth/TokenController';

const routes = Router();

routes
    .get("/categories", new TokenController().handleCheck, new GetAllCategoryController().handle)
    .post("/categories", new TokenController().handleCheck, new CreateCategoryController().handle)
    .delete("/categories/:id", new TokenController().handleCheck, new DeleteCategoryController().handle)
    .put("/categories/:id", new TokenController().handleCheck, new UpdateCategoryController().handle)

routes
    .get("/videos", new TokenController().handleCheck, new GetAllVideoController().handle)
    .post("/videos", new TokenController().handleCheck, new CreateVideoController().handle)

routes
    .get("/users", new TokenController().handleCheck, new GetAllUserController().handle)
    .post("/users", new TokenController().handleCheck, new CreateUserController().handle)
    .delete("/users/:id", new TokenController().handleCheck, new DeleteUserController().handle)
    .put("/users/:id", new TokenController().handleCheck, new UpdateUserController().handle) 

routes
    .post("/users/auth", new AuthUserController().handle)

export { routes };