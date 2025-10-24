import express from 'express';
const route = express.Router();
import mascotasController from '../controllers/mascotas.js';

route.post('/', mascotasController.create);
route.get('/:id', mascotasController.getOne);
route.get('/', mascotasController.getAll);
route.put('/:id', mascotasController.update);
route.delete('/:id', mascotasController.delete);

export default route;