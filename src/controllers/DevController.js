const axios = require('axios'),
    Dev = require('./../models/Dev');

module.exports = {
    async store (req, res) {
        const response = await axios.get(`https://api.github.com/users/${req.body.username}`);

        const dev = await Dev.create({
            name: response.data.name,
            user: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        });
        
        return res.status(200).json(dev);
    }
};