const Report = require("../models/Report");

// Tạo báo cáo mới
exports.createReport = async (req, res) => {
  try {
    const { title, link, category, description } = req.body;

    const newReport = new Report({
      title,
      link,
      category,
      description,
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy tất cả báo cáo (Admin)
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy báo cáo đã được duyệt (Member)
exports.getApprovedReports = async (req, res) => {
  try {
    const reports = await Report.find({ isApproved: true });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Duyệt báo cáo
exports.approveReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });

    report.isApproved = true; // Đánh dấu đã duyệt
    await report.save();
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa báo cáo
exports.deleteReport = async (req, res) => {
  try {
    const deletedReport = await Report.findByIdAndDelete(req.params.id);
    if (!deletedReport)
      return res.status(404).json({ message: "Report not found" });
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
