const sharp = require("sharp");

const sharpenImage = async (req, res, next) => {
  try {
    const { image, type, pro } = req.body;
    if (!image || !type || pro === undefined) {
      return res
        .status(400)
        .send("Please provide an image, type and is Pro or not!");
    }
    const imageBuffer = Buffer.from(image, "base64");
    const sharpedImage = pro
      ? await sharp(imageBuffer)
          .sharpen({
            sigma: 2,
            m1: 0,
            m2: 3,
            x1: 3,
            y2: 15,
            y3: 15,
          })
          .toBuffer()
      : await sharp(imageBuffer).sharpen().toBuffer();
    req.finalImage = sharpedImage;
    req.type = type;
    req.operation = "sharpen";
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = sharpenImage;
