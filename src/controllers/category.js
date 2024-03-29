const Category = require("../models/Category");
const Product = require("../models/Product");

module.exports = {
    getCategory: async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        const category = await Category.findById(id);
        return res.json({ category });
    },
    getCategories: async (req, res) => {
        const categories = await Category.find();
        return res.json({ categories });
    },
    createCategory: async (req, res) => {
        const { name } = req.body;
        if (!name)
            return res
                .status(400)
                .json({ error: "Ingrese el nombre de la categoria" });
        const category = await Category.findOne({ name });
        if (category)
            return res
                .status(400)
                .json({ error: "El nombre de la categoria ya existe" });
        const newCategory = new Category({ name });
        await newCategory.save();
        return res.json({
            message: "Se creo correctame una nueva categoria",
        });
    },
    updateCategory: async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        if (!name)
            return res
                .status(400)
                .json({ error: "Ingrese el nombre de la categoria" });
        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        const category = await Category.findByIdAndUpdate(id, { name });
        return res.json({
            message: `Se actualizo correctamente la categoria con el nombre "${category.name}" que ahora es "${name}"`,
        });
    },
    deleteCategory: async (req, res) => {
        const { id } = req.params;
        if (!id)
            return res
                .status(400)
                .json({ error: "No se proporciono ningun id" });
        const product = await Product.find({ category: id });
        if (product.length > 0)
            return res.status(400).json({
                error:
                    "No puede eliminar una categoria por que tiene productos que depende de ella",
            });
        const category = await Category.findByIdAndDelete(id, {
            rawResult: true,
        });
        return res.json({
            message: `Se elimino correctame la categoria con el nombre "${category.value.name}"`,
        });
    },
};
