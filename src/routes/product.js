const router = require("express").Router();
const { auth, authAdmin } = require("../middlewares/authentication");
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/product");

router.get("/", getProducts).post("/", auth, authAdmin, createProduct);
router
    .route("/:id")
    .get(getProduct)
    .put(auth, authAdmin, updateProduct)
    .delete(auth, authAdmin, deleteProduct);

module.exports = router;
