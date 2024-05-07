const express = require("express");
const router = express.Router();
const convertType = require("../controllers/convertType.js");
const uploadToS3 = require("../middleware/uploadToS3.js");
const negateImage = require("../controllers/negateImage.js");
const blurImage = require("../controllers/blurImage.js");
const grayscaleImage = require("../controllers/grayscaleImage.js");
const tintedImage = require("../controllers/tintImage.js");
const sharpedImage = require("../controllers/sharpenImage.js");
const resizeImage = require("../controllers/resizeImage.js");

router.route("/convert").post(convertType, uploadToS3);
router.route("/negate").post(negateImage, uploadToS3);
router.route("/blur").post(blurImage, uploadToS3);
router.route("/grayscale").post(grayscaleImage, uploadToS3);
router.route("/tint").post(tintedImage, uploadToS3);
router.route("/sharpen").post(sharpedImage, uploadToS3);
router.route("/resize").post(resizeImage, uploadToS3);

module.exports = router;
