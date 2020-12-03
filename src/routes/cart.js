const router = require("express").Router();
const { addCart } = require("../controllers/cart");
const { auth } = require("../middlewares/authentication");

router.route("/addcart").put(auth, addCart);

module.exports = router;
