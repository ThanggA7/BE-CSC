const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const isAdmin = require("../middleware/auth"); 

router.post("/reports", reportController.createReport); 

router.get("/admin/reports", isAdmin, reportController.getAllReports); 

router.get("/reports", reportController.getApprovedReports); 

router.put(
  "/admin/reports/:id/approve",
  isAdmin,
  reportController.approveReport
); 

router.delete("/admin/reports/:id", isAdmin, reportController.deleteReport); // Xóa báo cáo

module.exports = router;
