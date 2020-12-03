const Product = require("../models/Product");

module.exports = {
    getProduct: async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        console.log(id);
        const product = await Product.findById(id);
        if (!product)
            return res.status(404).json({ error: "El producto no existe" });
        return res.json({ product });
    },
    getProducts: async (req, res) => {
        const products = await Product.find();
        return res.json({ products });
    },
    createProduct: async (req, res) => {
        const { name, description, quantity, price, category } = req.body;
        if (
            !name ||
            !description ||
            !quantity ||
            !price ||
            !stock ||
            !images ||
            !category
        )
            return res.status(400).json({
                error: "Debe ingresar todos los parametros solicitados",
            });
        const product = await Product.findOne({ name });
        if (product)
            return res
                .status(400)
                .json({ error: "El nombre de el producto ya existe" });
        const newProdut = new Product({
            name,
            description,
            quantity,
            price,
            stock,
            images,
            category,
        });
        await newProdut.save();
        return res.json({
            message: `Se Actualizo correctamente el producto con el nombre ${product.name}`,
        });
    },
    updateProduct: async (req, res) => {
        const { id } = req.params;
        const {
            name,
            description,
            quantity,
            price,
            stock,
            images,
            category,
        } = req.body;
        if (
            !name ||
            !description ||
            !quantity ||
            !price ||
            !stock ||
            !images ||
            !category
        )
            return res.status(400).json({
                error: "Debe ingresar todos los parametros solicitados",
            });

        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        const product = await Product.findByIdAndUpdate(
            id,
            { name, description, quantity, price, stock, images, category },
            { new: true }
        );
        return res.json({
            message: `Se actualizo correctamente el producto con el nombre ${product.name}`,
        });
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        const product = await Product.findByIdAndDelete(id, {
            rawResult: true,
        });
        return res.json({
            message: `Se Actualizo correctamente el producto con el nombre ${product.value.name}`,
        });
    },
};
