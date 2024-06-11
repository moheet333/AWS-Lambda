const sharp = require("sharp");

const resizeImage = async (req, res, next) => {
  try {
    const { image, type, width, height, fit } = req.body;
    if (!image || !type || !width || !height || !fit) {
      return res
        .status(400)
        .send("Image, type, width, height and fit are required");
    }
    const imageBuffer = Buffer.from(image, "base64");
    const resizedImage = await sharp(imageBuffer)
      .resize(Number(width), Number(height), { fit: fit })
      .toBuffer();
    req.finalImage = resizedImage;
    req.type = type;
    req.operation = "resize";
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = resizeImage;
