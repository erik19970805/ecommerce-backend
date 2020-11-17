const User = require('../models/User');

module.exports = {
    getUser: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.json({ error: 'se necesita un id' });
        const user = await User.findById(id);
        if (!user) return res.json({ error: 'no existe el usuario solicitado' });
        return res.json({ user });
    },
    getUsers: async (req, res) => {
        const users = await User.find();
        return res.json({ users });
    },
    createUser: async (req, res) => {
        const { name, email, password, rol } = req.body;
        if (!name || !email || !password || !rol) {
            return res.json({ error: 'Ingrese todos los datos solicitados' });
        }
        if (await User.findOne({ email })) {
            return res.json({ error: 'El email ya esta registrado' });
        }
        const newUser = new User({ name, email, password, rol });
        await newUser.save();
        return res.json({ newUser });
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.json({ error: 'se necesita un id' });
        const { rol, state } = req.body;
        if (!rol) return res.json({ error: 'Debe llenar todos los campos solicitados' });
        const user = await User.findByIdAndUpdate(id, { rol, state }, { new: true });
        return res.json({ user });
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.json({ error: 'se necesita un id' });
        const user = await User.findByIdAndDelete(id, { rawResult: true });
        return res.json({ message: 'se elimino un usuario', user: user.value });
    }
}