const productModle = require("../models/productModle");

const homeController = (req, res) => {
  try {
    res.send("hello home pages");
  } catch (error) {
    res.send(error);
  }
};

// Creating product using POST method

const createProduct = async (req, res) => {
  try {
    const Product = new productModle(req.body);
    await Product.save();
    res.status(201).send("product created successfully..");
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

// Show products using GET method
const showProduct = async (req, res) => {
  try {
    const Product = await productModle.find();
    res.status(200).send(Product);
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

// Deleting products;;
const deleteProduct = async (req, res) => {
  try {
    const Product = await productModle.findByIdAndDelete(req.params.id);
    res.status(200).send(`delete Product ${Product}`);
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

//

const singleproduct = async (req, res) => {
  try {
    const Id = req.params.abc;
    const Product = await productModle.findById(Id);
    console.log(Product);
    res.status(200).json({ message: "krishna", data: Product });
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

module.exports = {
  homeController,
  createProduct,
  showProduct,
  deleteProduct,
  singleproduct,
};
