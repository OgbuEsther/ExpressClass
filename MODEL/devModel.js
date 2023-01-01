const mongoose = require("mongoose");

const devSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  gender: {
    type: Boolean,
  },
  complexion: {
    type: String,
  },
  phoneNO: {
    type: Number,
  },
  nameOfPC: {
    type: String,
  },
});

const devModel = mongoose.model("DevInfo", devSchema);

module.exports = devModel;
