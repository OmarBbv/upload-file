const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  
  const images = req.files.map(file => file.path);

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      images,  
    });
    await newProduct.save();
    res.status(200).json({
      success: true,
      msg: "Gonderildi!",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send("Ürün oluşturma hatası");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).send("Ürünleri getirirken hata oluştu");
  }
};
module.exports = { createProduct,getProducts };
