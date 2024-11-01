const isAdmin = (req, res, next) => {
  // Giả định rằng admin có một trường 'isAdmin' trong JWT token
  // Cách kiểm tra này cần được điều chỉnh tùy thuộc vào cách bạn xác thực người dùng
  if (req.user && req.user.isAdmin) {
    return next(); // Cho phép truy cập
  }
  return res.status(403).json({ message: "Access denied" }); // Từ chối truy cập
};

module.exports = isAdmin;
