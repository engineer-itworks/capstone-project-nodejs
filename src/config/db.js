const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

async function connectDb() {
  mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected with MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));
}

module.exports = { connectDb };