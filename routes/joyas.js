import express from 'express';
const route = express.Router();
import joyasController from '../controllers/joyas.js';

route.post('/', joyasController.create);
route.get('/:id', joyasController.getOne);
route.get('/', joyasController.getAll);
route.put('/:id', joyasController.update);
route.delete('/:id', joyasController.delete);

export default route;