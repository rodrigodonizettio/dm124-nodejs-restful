const notFound = (req, res, next) => {
    res.status(404).json({
        error: `Route ${req.method} ${req.url} was not found!`
    });
};

module.exports = notFound;