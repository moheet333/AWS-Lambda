const express = require("express");
const router = express.Router();
const convertType = require("../middleware/convertType.js");
const uploadToS3 = require("../controller/uploadToS3.js");
const negateImage = require("../middleware/negateImage.js");
const blurImage = require("../middleware/blurImage.js");
const grayscaleImage = require("../middleware/grayscaleImage.js");
const tintedImage = require("../middleware/tintImage.js");
const sharpedImage = require("../middleware/sharpenImage.js");
const resizeImage = require("../middleware/resizeImage.js");

router.route("/convert").post(convertType, uploadToS3);
router.route("/negate").post(negateImage, uploadToS3);
router.route("/blur").post(blurImage, uploadToS3);
router.route("/grayscale").post(grayscaleImage, uploadToS3);
router.route("/tint").post(tintedImage, uploadToS3);
router.route("/sharpen").post(sharpedImage, uploadToS3);
router.route("/resize").post(resizeImage, uploadToS3);

module.exports = router;
