const express = require("express");
const router = express.Router();
const convertType = require("../controllers/convertType.js");
const uploadToS3 = require("../middleware/uploadToS3.js");
const negateImage = require("../controllers/negateImage.js");

router.route("/convert").post(convertType, uploadToS3);
router.route("/negate").post(negateImage, uploadToS3);

module.exports = router;
