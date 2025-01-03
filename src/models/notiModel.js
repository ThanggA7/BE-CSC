const mongoose = require("mongoose");

const notiSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Noti = mongoose.model("Noti", notiSchema);

module.exports = Noti;
