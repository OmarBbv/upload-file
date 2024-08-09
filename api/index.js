const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./src/routers/productRouter");
const cors = require("cors");
const cloudinary = require('cloudinary').v2;

const app = express();
app.use(cors());
// MongoDB'ye bağlanma
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Orta katman yazılımları
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // JSON veriler için

app.use(express.static("public")); 

// Rotalar
app.use("/api/product", productRouter);








// Sunucuyu başlatma
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
