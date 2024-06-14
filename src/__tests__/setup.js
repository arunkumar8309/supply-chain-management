const connectDB = require("../database");

module.exports = async () => {
  await connectDB();
};
