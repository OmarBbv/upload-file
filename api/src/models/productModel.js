// models/Product.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Ürün şeması
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        trim: true,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Model oluşturma
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
