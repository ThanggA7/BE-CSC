const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isApproved: { type: Boolean, default: false },
});

// Tạo model Report
const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
