import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsControllers from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const ConnectionsController = new ConnectionsControllers();

routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

routes.post('/connections', ConnectionsController.create)

export default routes;