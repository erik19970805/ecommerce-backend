const Product = require('../models/Product');

module.exports = {
    getProduct: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.json({ error: 'No se proporciono ningun id' });
        const product = await Product.findById(id);
        return res.json({ product });
    },
    getProducts: async (req, res) => {
        const products = await Product.find();
        return res.json({ products });
    },
    getProductsByCategory: async (req, res) => {
        const { category } = req.params;
        const products = await Product.find({ category }).populate('category', '_id name');
        return res.json({ products });
    },
    createProduct: async (req, res) => {
        const { name, description, quantity, price, category } = req.body;
        if (!name || !description || !quantity || !price || !stock || !images || !category) return res.json({ error: 'Debe ingresar todos los parametros solicitados' });
        const product = await Product.findOne({ name });
        if (product) return res.json({ error: 'El nombre de el producto ya existe' });
        const newProdut = new Product({ name, description, quantity, price, stock, images, category });
        await newProdut.save();
        return res.json({ message: 'Se creo correctame el producto', produt: newProdut });
    },
    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { name, description, quantity, price, stock, images, category } = req.body;
        if (!name || !description || !quantity || !price || !stock || !images || !category) {
            return res.json({ error: 'Debe ingresar todos los parametros solicitados' });
        }
        if (!id) return res.json({ error: 'No se proporciono ningun id' });
        const product = await Product.findByIdAndUpdate(id, { name, description, quantity, price, stock, images, category }, { new: true });
        return res.json({ product });
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.json({ error: 'No se proporciono ningun id' });
        const product = await Product.findByIdAndDelete(id, { rawResult: true });
        return res.json({ message: 'Se elimino correctame el producto', product: product.value });
    }
}