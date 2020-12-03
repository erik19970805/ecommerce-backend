const User = require("../models/User");

module.exports = {
    addCart: async (req, res) => {
        try {
            const user = await User.findById(req.user._id);
            if (!user)
                return res.status(400).json({ error: "El usuario no existe" });
            await User.findOneAndUpdate(
                { _id: user._id },
                { cart: req.body.cart }
            );
            return res.json({ message: "Producto añadido al carrito" });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    },
};
