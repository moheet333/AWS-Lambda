const sharp = require("sharp");

const convertType = async (req, res, next) => {
  try {
    const { image, type } = req.body;
    if (!image || !type) {
      return res.status(400).send("Please provide an image and a type!");
    }
    const imageBuffer = Buffer.from(image, "base64");

    const conertedImage = await sharp(imageBuffer).toFormat(type).toBuffer();
    req.finalImage = conertedImage;
    req.type = type;
    req.operation = "convertType";
    next();
  } catch (error) {
    res.status(500).send("Error in uploading image to S3: " + error);
  }
};

module.exports = convertType;
