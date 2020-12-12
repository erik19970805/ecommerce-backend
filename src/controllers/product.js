const Product = require("../models/Product");

class productFilters {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query
    const excludeFields = ["page", "sort", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = {
  getProduct: async (req, res) => {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ error: "No se proporciono ningun id" });
    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({ error: "El producto no existe" });
    return res.json({ product });
  },
  getProducts: async (req, res) => {
    try {
      const filter = new productFilters(Product.find(), req.query)
        .filtering()
        .sorting()
        .paginating();
      const products = await filter.query;
      return res.json({ products });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  createProduct: async (req, res) => {
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
    const product = await Product.findOne({ name });
    if (product)
      return res
        .status(400)
        .json({ error: "El nombre de el producto ya existe" });
    const newProduct = new Product({
      name,
      description,
      quantity,
      price,
      stock,
      images,
      category,
    });
    await newProduct.save();
    return res.json({
      message: `Se creo correctamente el producto con el nombre ${newProduct.name}`,
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
      return res.status(400).json({ error: "No se proporciono ningun id" });
    const product = await Product.findByIdAndUpdate(
      id,
      { name, description, quantity, price, stock, images, category },
      { new: true }
    );
    return res.json({
      message: `Se actualizo correctamente el producto con el nombre "${product.name}"`,
    });
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ error: "No se proporciono ningun id" });
    const product = await Product.findByIdAndDelete(id, {
      rawResult: true,
    });
    return res.json({
      message: `Se elimino correctamente el producto con el nombre "${product.value.name}"`,
    });
  },
};
