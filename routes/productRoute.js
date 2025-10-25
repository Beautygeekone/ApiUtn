import { Router } from 'express';
import joyaController from '../controllers/productController.js';


const router = Router();


router.post('/', joyaController.create);
router.get('/', joyaController.getAll); 
router.get('/:id', joyaController.getOne); 
router.put('/:id', joyaController.update);
router.delete('/:id', joyaController.delete);

export default router;
