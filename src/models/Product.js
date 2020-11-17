const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    images: { type: Object, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

module.exports = model('Product', productSchema);