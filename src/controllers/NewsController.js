const News = require("../models/News");

exports.createNews = async (req, res) => {
  try {
    const { title,thumbnail,description, content } = req.body;
    const newsNews = new News({
      title,
      thumbnail,
      description,
      content,
    });

    const saveNews = await newsNews.save();
    res.status(201).json({ message: "Da tao ban tin thanh cong !" });
  } catch (error) {
    res.status(500).json({ error: "Loi !" });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ err: "Loi khong the lay duoc data" });
  }
};

exports.getNewsByID = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(500).json({ err: error.message});
  }
};
