const Payment = require("../models/Payment");
const User = require("../models/User");
const Product = require("../models/Product");

const sold = async (id, quantity, oldSold) => {
    await Product.findOneAndUpdate({ _id: id }, { sold: quantity + oldSold });
};

module.exports = {
    getPayments: async (req, res) => {
        try {
            const payments = await Payment.find();
            return res.json({ payments });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    createPayment: async (req, res) => {
        try {
            const user = await User.findById(req.user._id).select("name email");
            if (!user)
                return res.status(500).json({ error: "El usuario no existe" });
            const { cart, paymentID, address } = req.body;
            const { name, email } = user;
            const newPayment = new Payment({
                user,
                name,
                email,
                cart,
                paymentID,
                address,
            });

            cart.filter((item) => {
                return sold(item._id, item.quantity, item.sold);
            });

            await newPayment.save();

            return res.json({ message: "Pago completado correctamente" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};
