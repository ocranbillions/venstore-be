import { Router } from 'express';
import * as productController from '../controllers/products.controller';

const {
    createProduct,
    fetchAllProducts,
    fetchSingleProduct,
    updateProduct,
    deleteProduct
} = productController;

const router = Router();

router.post('/', createProduct);
router.get('/', fetchAllProducts);
router.get('/:id', fetchSingleProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;