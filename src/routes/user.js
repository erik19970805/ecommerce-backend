const router = require("express").Router();
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user");


router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/").get(getUsers).post(createUser);

module.exports = router;
