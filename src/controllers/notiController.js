const Noti = require("../models/notiModel");

exports.createNoti = async (req, res) => {
  try {
    const { slug, content } = req.body;

    let noti = await Noti.findOne({ slug });

    if (!noti) {
      noti = new Noti({ slug, content });
    } else {
      noti.content = content;
    }

    await noti.save();

    res.status(200).json({ message: "Notification saved successfully", noti });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

exports.getNoti = async (req, res) => {
  try {
    const { slug } = req.params;
    const noti = await Noti.findOne({ slug });

    if (!noti) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(noti);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

exports.deleteNoti = async (req, res) => {
  try {
    const { slug } = req.params;

    const noti = await Noti.findOneAndDelete({ slug });

    if (!noti) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
