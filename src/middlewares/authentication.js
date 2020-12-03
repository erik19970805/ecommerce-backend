const passport = require("passport");
const User = require("../models/User");

module.exports = {
    auth: (req, res, next) => {
        passport.authenticate("jwt", { session: false }, async (err, user) => {
            if (err)
                return res
                    .status(400)
                    .json({ error: "Su autentificacion es invalida" });
            req.user = user;
            next();
        })(req, res);
    },
    authAdmin: async (req, res, next) => {
        try {
            if (req.user.role !== "admin")
                return res.status(400).json({
                    error: "Usted no puede acceder a este contenido",
                });
            next();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};
