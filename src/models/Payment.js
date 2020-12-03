const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        paymentID: { type: String, required: true },
        address: { type: Object, required: true },
        cart: { type: Array, default: [] },
        status: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = model("Payment", paymentSchema);
