const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dwxn9w5be',
  api_key: '233282418171293',
  api_secret: 'iMn6h6rDxTpChgAAOBoSarEEyag',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', 
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
  },
});

const upload = multer({ storage }).array("images", 12);

module.exports = upload;
