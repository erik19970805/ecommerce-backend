const Payment = require("../models/Payment");

module.exports = {
    getHistories: async (req, res) => {
        try {
            const histories = await Payment.find({ user: req.user._id });
            res.json({ histories });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getHistory: async (req, res) => {
        try {
            const history = await Payment.findById(req.params.id);
            res.json({ history });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};
