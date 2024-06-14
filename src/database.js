require("dotenv").config(); // Ensure this is at the very top

const mongoose = require("mongoose");

console.log("process.env.MONGO_URI:", process.env.MONGO_URI); // Debugging statement

const URI = process.env.MONGO_URI || "mongodb://127.0.0.1/supply_chain";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
