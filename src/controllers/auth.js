const jwt = require('jsonwebtoken');
const { use } = require('passport');
const { JWT_SECRET } = process.env;
const passport = require('passport');

module.exports = {
    signup: async (req, res, next) => {
        passport.authenticate('signup', { session: false }, async (err, user, info) => {
            try {
                if (err || !user) {
                    return res.json({ error: info.error });
                }
                return res.json({ id: user.id, message: info.message });
            } catch (e) {
                return next(e);
            }
        })(req, res)
    },
    signin: async (req, res, next) => {
        passport.authenticate('signin', async (err, user, info) => {
            try {
                if (err || !user) {
                    return res.json({ error: info.error });
                }
                req.login(user, { session: false }, async (err) => {
                    if (err) return next(err)
                    const newUser = { id: user._id, rol: user.rol, state: user.state }
                    const token = jwt.sign({ user: newUser }, JWT_SECRET);
                    return res.json({ token });
                })
            } catch (e) {
                return next(e);
            }
        })(req, res)
    }
}
