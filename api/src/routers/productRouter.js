const express = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/products", upload, createProduct);
router.get("/get", getProducts);

module.exports = router;
