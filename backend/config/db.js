/* require("dotenv").config(); */
const mongoose = require("mongoose");

const URI = 
'mongodb+srv://admin:nvsinh7651@cluster0.vdisv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
