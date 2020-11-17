const router = require('express').Router();
const { both } = require('../middlewares/authentication');
const { uploadImage, deleteImage } = require('../controllers/upload');

router
    .post('/', both, uploadImage)
    .post('/destroy', both, deleteImage);

module.exports = router;
