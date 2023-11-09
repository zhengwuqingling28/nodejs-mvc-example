//Defining a Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 250, default: "" },
  description: { type: String, maxLength: 500, default: "" },
  image: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

//Accessing a Model
module.exports = mongoose.model("Course", Course);
