const router = require("express").Router();
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user");
const { user } = require("../middlewares/authentication");

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/").get(getUsers).post(createUser);

module.exports = router;
