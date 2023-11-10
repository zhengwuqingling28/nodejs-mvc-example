//Defining a Model
const mongoose = require("mongoose");
var slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 250, required: true },
  description: { type: String, maxLength: 500, default: "" },
  image: { type: String, default: "" },
  slug: { type: String, slug: "name", unique: "true" },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

//Accessing a Model
module.exports = mongoose.model("Course", Course);
