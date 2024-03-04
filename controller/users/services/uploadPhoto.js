const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDYNARY_CLOUD_NAME,
    api_key: process.env.CLOUDYNARY_API_KEY,
    api_secret: process.env.CLOUDYNARY_API_SECRET
});
const uploadPhoto = async (photoPath) => {
    try {
        const result = await cloudinary.uploader.upload(photoPath);
        return result.url;
    } catch (error) {
        console.error('Error uploading a photo:', error);
        throw error;
    }
};

module.exports = uploadPhoto