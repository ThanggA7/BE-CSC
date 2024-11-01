const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return  next(); // Từ chối truy cập
};

module.exports = isAdmin;
