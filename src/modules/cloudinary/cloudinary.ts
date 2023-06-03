import cloudinary from 'cloudinary';
const cloudinaryV2 = cloudinary.v2;
// for better security, use env
cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageAvatars = async (fileStr) => {
  try {
    const options = { folder: 'avatars' }; // Specify the folder where the image will be saved
    const uploadResponse = await cloudinaryV2.uploader.upload(fileStr, options);
    // basic use: use secure_url only,
    return uploadResponse.secure_url;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary');
  }
};
export { uploadImageAvatars, cloudinaryV2 };
