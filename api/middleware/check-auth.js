const checkAuth = (req, res, next) => {
  // ZG0xMjQ6YWx1bm9pbmF0ZWw=
  const token = req.headers.authorization;
  if(/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)) {
    next();
  } else {
    res.status(401).json({
      error: 'Not authorized'
    })
  }
}

module.exports = checkAuth;