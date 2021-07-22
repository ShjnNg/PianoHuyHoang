const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()/* .skip(2).limit(2) */;
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsPage = async (req, res) => {
  try {
    if (req.params.page!=null && req.params.limit != null){
      const products = await Product.find().skip(Number(req.params.page)).limit(Number(req.params.limit));
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByTypePage = async (req, res) => {
  try {
    if (req.params.page!=null && req.params.limit != null){
      const products = await Product
      .find({ type: { $regex: new RegExp(req.params.type), $options: "i" } })
      .skip(Number(req.params.page))
      .limit(Number(req.params.limit));
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByTitlePage = async (req, res) => {
  try {
    if (req.params.page!=null && req.params.limit != null){
      const products = await Product
      .find({ title: { $regex: new RegExp(req.params.title), $options: "i" } })
      .skip(Number(req.params.page))
      .limit(Number(req.params.limit));
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getCountProduct = async (req, res) => {
  try {
    const Countproduct = await Product.find().count();
    res.json(Countproduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getCountbyTypeProduct = async (req, res) => {
  try {
    const Countproduct = await Product.find({ type: { $regex: new RegExp(req.params.type), $options: "i" } }).count();
    res.json(Countproduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getCountbyTitleProduct = async (req, res) => {
  try {
    const Countproduct = await Product.find({ title: { $regex: new RegExp(req.params.title), $options: "i" } }).count();
    res.json(Countproduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getTop10Products = async (req, res) => {
  try {
    const products = await Product.find().limit(4).sort({"likeCount":-1});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getProductsByType = async (req, res) => {
  try {
    const products = await Product.find({ type: { $regex: new RegExp(req.params.type), $options: "i" } });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByTitle = async (req, res) => {
  try {
    const products = await Product.find({ title: { $regex: new RegExp(decodeURIComponent(req.params.title)), $options: "i" } });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const CreateProduct = async (req, res) => {
  try {
    const newProduct = req.body;

    const product = new Product(newProduct);
    await product.save();

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const DelProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "data deleted successfully!"
  })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;

    const product = await Product.findOneAndUpdate(
      { _id: updateProduct._id },
      updateProduct,
      { new: true }
    );

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
module.exports = {
  getProducts,
  getProductById,
  CreateProduct,
  DelProductById,
  getProductsByType,
  getTop10Products,
  updateProduct,
  getProductsByTitle,
  getProductsPage,
  getCountProduct,
  getCountbyTitleProduct,
  getCountbyTypeProduct,
  getProductsByTypePage,
  getProductsByTitlePage
};
