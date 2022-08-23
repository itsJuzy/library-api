const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  imagePath: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Book", bookSchema);
