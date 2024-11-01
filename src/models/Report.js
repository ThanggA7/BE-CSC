const mongoose = require("mongoose");

// Định nghĩa schema cho Report
const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Ngày gửi báo cáo
  isApproved: { type: Boolean, default: false }, // Trạng thái duyệt
});

// Tạo model Report
const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
