const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Mongo DB URI >>",process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;