const express = require("express");
const router = express.Router();

const newsController = require("../controllers/NewsController");

const isAdmin = require("../middleware/auth");

router.post("/admin/post", isAdmin, newsController.createNews);
router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsByID);

module.exports = router;
