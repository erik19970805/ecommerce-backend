const passport = require('passport');
const User = require('../models/User');

module.exports = {
    user: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, async (err, id) => {
            if (err || !id) return res.json({ error: 'Debe iniciar sesiòn' });
            const user = await User.findById(id, { password: 0 });
            if (!user) return res.json({ error: 'El usuario no existe' });
            const { rol, state } = user;
            if (!state) return res.json({ error: 'El usuario no existe' });
            if (rol !== 'user') return res.json({ error: 'No puede acceder a este contenido' });
            req.user = user;
            next();
        })(req, res)
    },
    admin: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, async (err, id) => {
            if (err || !id) return res.json({ error: 'Debe iniciar sesiòn' });
            const user = await User.findById(id, { password: 0 });
            if (!user) return res.json({ error: 'El usuario no existe' });
            const { rol, state } = user;
            if (!state) return res.json({ error: 'El usuario no existe' });
            if (rol !== 'admin') return res.json({ error: 'No puede acceder a este contenido' });
            req.user = user;
            next();
        })(req, res)
    },
    both: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, async (err, id) => {
            if (err || !id) return res.json({ error: 'Debe iniciar sesiòn' });
            const user = await User.findById(id, { password: 0 });
            if (!user) return res.json({ error: 'El usuario no existe' });
            const { rol, state } = user;
            if (!state) return res.json({ error: 'El usuario no existe' });
            if (rol !== 'admin' && rol !== 'user') return res.json({ error: 'No puede acceder a este contenido' });
            req.user = user;
            next();
        })(req, res)
    }
}