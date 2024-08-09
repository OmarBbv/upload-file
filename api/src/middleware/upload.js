const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('cloudinary').v2;

// Cloudinary yapılandırması
cloudinary.config({
  cloud_name: 'dwxn9w5be',
  api_key: '233282418171293',
  api_secret: 'iMn6h6rDxTpChgAAOBoSarEEyag',
});

// Cloudinary Storage yapılandırması
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Resimlerin Cloudinary'de saklanacağı klasör
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
  },
});

// Multer yapılandırması
const upload = multer({ storage }).array("images", 12);

module.exports = upload;
