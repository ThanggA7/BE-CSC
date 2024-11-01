const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const isAdmin = require("../middleware/auth"); // Import middleware xác thực

// Route cho người dùng gửi báo cáo
router.post("/reports", reportController.createReport); // Tạo báo cáo mới

// Route cho admin lấy tất cả báo cáo
router.get("/admin/reports", isAdmin, reportController.getAllReports); // Lấy tất cả báo cáo (Admin)

// Route cho member lấy báo cáo đã được duyệt
router.get("/reports", reportController.getApprovedReports); // Lấy báo cáo đã được duyệt (Member)

// Route cho admin duyệt báo cáo
router.put(
  "/admin/reports/:id/approve",
  isAdmin,
  reportController.approveReport
); // Duyệt báo cáo

// Route cho admin xóa báo cáo
router.delete("/admin/reports/:id", isAdmin, reportController.deleteReport); // Xóa báo cáo

module.exports = router;
