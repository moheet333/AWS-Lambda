const sharp = require("sharp");

const tintImage = async (req, res, next) => {
  try {
    const { image, color, type } = req.body;
    if (!image || !type || !color) {
      return res.status(400).send("Please provide an image, type and color!");
    }
    const imageBuffer = Buffer.from(image, "base64");
    const tintedImage = await sharp(imageBuffer).tint(color).toBuffer();
    req.finalImage = tintedImage;
    req.type = type;
    req.operation = "tint";
    next();
  } catch (error) {
    res.status(500).send("Error in Tinting: " + error);
  }
};

module.exports = tintImage;
