const sharp = require("sharp");

const blurImage = async (req, res, next) => {
  try {
    const { image, blur, type } = req.body;
    if (!image || !blur || !type) {
      return res
        .status(400)
        .send("Please provide an image,blur value and type!");
    }
    const imageBuffer = Buffer.from(image, "base64");

    const blurredImage = await sharp(imageBuffer).blur(Number(blur)).toBuffer();
    req.finalImage = blurredImage;
    req.type = type;
    req.operation = "blur";
    next();
  } catch (error) {
    res.status(500).send("Error in uploading image to S3: " + error);
  }
};

module.exports = blurImage;
