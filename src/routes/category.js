const router = require("express").Router();
const { auth, authAdmin } = require("../middlewares/authentication");
const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/category");

router.route("/").get(getCategories).post(auth, authAdmin, createCategory);
router
    .get("/:id", auth, authAdmin, getCategory)
    .put("/:id", auth, authAdmin, updateCategory)
    .delete("/:id", auth, authAdmin, deleteCategory);

module.exports = router;
