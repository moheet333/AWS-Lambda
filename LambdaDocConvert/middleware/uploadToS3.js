const AWS = require("aws-sdk");
const sharp = require("sharp");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_MY_ACCESS_KEY,
  secretAccessKey: process.env.AWS_MY_SECRET_KEY,
});

const uploadToS3 = async (req, res, next) => {
  try {
    const convertedImage = req.finalImage;
    const type = req.type;
    const uploadedImage = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: Date.now() + "." + type,
        Body: convertedImage,
      })
      .promise();
    return res.status(200).json({ imageUrl: uploadedImage.Location });
  } catch (error) {
    res.status(500).send("Error in uploading image to S3: " + error);
  }
};

module.exports = uploadToS3;
