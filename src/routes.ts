import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

const routes = Router();

routes
    .post("/categories", new CreateCategoryController().handle)
    .get("/categories", new GetAllCategoryController().handle)
    .delete("/categories/:id", new DeleteCategoryController().handle)
    .put("/categories/:id", new UpdateCategoryController().handle)

export { routes };