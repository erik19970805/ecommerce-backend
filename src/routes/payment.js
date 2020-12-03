const router = require("express").Router();
const { getPayments, createPayment } = require("../controllers/payment");
const { auth, authAdmin } = require("../middlewares/authentication");

router.route("/").get(auth, authAdmin, getPayments).post(auth, createPayment);

module.exports = router;
