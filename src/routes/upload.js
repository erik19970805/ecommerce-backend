const router = require("express").Router();
const { auth, authAdmin } = require("../middlewares/authentication");
const { uploadImage, deleteImage } = require("../controllers/upload");

router.post("/", auth, uploadImage).post("/destroy", auth, deleteImage);

module.exports = router;
