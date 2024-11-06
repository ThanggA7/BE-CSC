const Report = require("../models/Report");

// Tạo báo cáo mới
exports.createReport = async (req, res) => {
  try {
    const { title, url, category, description } = req.body;

    const newReport = new Report({
      title,
      url,
      category,
      description,
    });

    const savedReport = await newReport.save();
    res.status(201).json({ message: "Đã gửi báo cáo thành công !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApprovedReports = async (req, res) => {
  try {
    const reports = await Report.find({ isApproved: true });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.approveReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });

    report.isApproved = true;
    await report.save();
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

exports.findReport = async (req, res) => {
  try {
    const findRP = await Report.findById(req.params.id);
    res.json(findRP);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.findReportByLink = async (req, res) => {
  try {
    const { url } = req.query;
    const findRPBL = await Report.findOne({ url });
    res.json(findRPBL);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
