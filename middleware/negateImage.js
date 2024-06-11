const sharp = require("sharp");

const negateImage = async (req, res, next) => {
  try {
    const { image, type } = req.body;
    if (!image || !type) {
      return res.status(400).send("Please provide an image and a type!");
    }
    const imageBuffer = Buffer.from(image, "base64");
    const negatedImage = await sharp(imageBuffer).negate().toBuffer();
    req.finalImage = negatedImage;
    req.type = type;
    req.operation = "negate";
    next();
  } catch (error) {
    res.status(500).send("Error in negating image: " + error);
  }
};

module.exports = negateImage;
