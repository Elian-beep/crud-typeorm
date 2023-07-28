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

const routes = Router();

routes
    .get("/categories", new GetAllCategoryController().handle)
    .post("/categories", new CreateCategoryController().handle)
    .delete("/categories/:id", new DeleteCategoryController().handle)
    .put("/categories/:id", new UpdateCategoryController().handle)

routes
    .get("/videos", new GetAllVideoController().handle)
    .post("/videos", new CreateVideoController().handle)

routes
    .get("/users", new GetAllUserController().handle)
    .post("/users", new CreateUserController().handle)
    .delete("/users/:id", new DeleteUserController().handle)
    .put("/users/:id", new UpdateCategoryController().handle) 

export { routes };