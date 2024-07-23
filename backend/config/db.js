// config/db.js

require("dotenv").config();
const mongoose = require("mongoose");

const mongoDbUri = "mongodb+srv://pradeeptaj17:123456qq@cluster0.noxhqcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDbUri);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectDB;