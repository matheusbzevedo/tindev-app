const Dev = require('./../models/Dev');

module.exports = {
    store (req, res) {
        return res.status(200).json({ params: req.params, headers: req.headers });
    }
};