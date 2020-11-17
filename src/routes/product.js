const router = require('express').Router();
const { admin } = require('../middlewares/authentication');
const { getProducts, getProductsByCategory, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product');

router.route('/:id')
    .get(getProduct)
    .put(admin, updateProduct)
    .delete(admin, deleteProduct);

router
    .get('/', getProducts)
    .get('/bycategory/:category', getProductsByCategory)
    .post('/', admin, createProduct);

module.exports = router;
