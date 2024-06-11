const sharp = require("sharp");

const grayscaleImage = async (req, res, next) => {
  try {
    const { image, type } = req.body;
    if (!image || !type) {
      return res.status(400).send("Please provide an image and type!");
    }
    const imageBuffer = Buffer.from(image, "base64");

    const grayscaledImage = await sharp(imageBuffer).greyscale().toBuffer();
    req.finalImage = grayscaledImage;
    req.type = type;
    req.operation = "grayscale";
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = grayscaleImage;
