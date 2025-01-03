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
    res.status(500).json({ message: "An error occurred", error: error.message });
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
    res.status(500).json({ message: "An error occurred", error: error.message });
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
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Thêm phương thức sửa thông báo
exports.updateNoti = async (req, res) => {
  try {
    const { slug } = req.params;
    const { content } = req.body;

    // Tìm thông báo theo slug
    const noti = await Noti.findOne({ slug });

    if (!noti) {
      return res.status(404).json({ message: "Notification not found" });
    }

    // Cập nhật nội dung thông báo
    noti.content = content;
    
    // Lưu thông báo đã cập nhật
    await noti.save();

    res.status(200).json({ message: "Notification updated successfully", noti });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};
