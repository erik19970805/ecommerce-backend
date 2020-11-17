const router = require('express').Router();
const { admin } = require('../middlewares/authentication');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/category');

router.route('/')
    .get(getCategories)
    .post(admin, createCategory);
router
    .get('/:id', getCategory)
    .put('/:id', admin, updateCategory)
    .delete('/:id', admin, deleteCategory)

module.exports = router;
