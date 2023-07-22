import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideoController } from './controllers/GetAllVideoController';

const routes = Router();

routes
    .get("/categories", new GetAllCategoryController().handle)
    .post("/categories", new CreateCategoryController().handle)
    .delete("/categories/:id", new DeleteCategoryController().handle)
    .put("/categories/:id", new UpdateCategoryController().handle)

routes
    .get("/videos", new GetAllVideoController().handle)
    .post("/videos", new CreateVideoController().handle)

export { routes };