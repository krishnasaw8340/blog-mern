const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb+srv://${user}:${pass}@medfist.h4p3tmw.mongodb.net/?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;