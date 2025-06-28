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
    console.log(Product);
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

// Show products using GET method
const showProduct = async (req, res) => {
  try {
    const Product = await productModle.find(); 
    res.status(200).send(Product)
  } catch (error) {
    res.status(501).send("server issue..", error);
  }
};

module.exports = {
  homeController,
  createProduct,
  showProduct,
};
