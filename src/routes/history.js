const router = require("express").Router();
const { auth } = require("../middlewares/authentication");
const { getHistory, getHistories } = require("../controllers/history");

router.route("/").get(auth, getHistories);
router.route("/:id").get(auth, getHistory);

module.exports = router;
