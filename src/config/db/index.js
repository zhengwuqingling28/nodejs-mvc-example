const mongoose = require("mongoose");

async function connect() {
  try {
    //Connecting to MongoDB
    await mongoose.connect("mongodb://127.0.0.1/blog");
    console.log("Connect successfully!!!");
  } catch (err) {
    console.log("Connect failure!!!");
  }
}

module.exports = { connect };
