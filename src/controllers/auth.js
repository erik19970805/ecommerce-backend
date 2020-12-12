const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;
const passport = require("passport");

module.exports = {
  signup: async (req, res) => {
    passport.authenticate(
      "signup",
      { session: false },
      async (err, user, info) => {
        try {
          if (err || !user) {
            return res.status(400).json({ error: info.error });
          }
          return res.json({ message: info.message });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      }
    )(req, res);
  },
  signin: async (req, res) => {
    passport.authenticate("signin", async (err, user, info) => {
      try {
        if (err || !user) {
          return res.status(401).json({ error: info.error });
        }
        req.login(user, { session: false }, async (error) => {
          if (error) return res.status(401).json({ error });
          const token = jwt.sign({ id: user._id }, ACCESS_TOKEN_SECRET, {
            expiresIn: "1d",
          });
          const isLogged = true;
          const isAdmin = req.user.role === "admin" ? true : false;
          return res.json({
            isLogged,
            isAdmin,
            token,
            cart: req.user.cart,
          });
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    })(req, res);
  },
};
