import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';
import { config } from 'dotenv';

config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "venstore",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 300, height: 400, crop: "limit" }]
});

const parser = multer({ storage: storage });

export default parser;