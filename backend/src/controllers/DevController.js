const axios = require('axios'),
    Dev = require('./../models/Dev');

module.exports = {
    async index (req, res) {
        const loggedUser = await Dev.findById(req.headers.user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: req.headers.user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin:loggedUser.dislikes } }
            ],
        });

        return res.status(200).json(users);
    },

    async store (req, res) {
        const response = await axios.get(`https://api.github.com/users/${req.body.username}`);

        const userExists = await Dev.findOne({ user: response.data.login });

        if (userExists) return res.status(302).json(userExists);

        const dev = await Dev.create({
            name: response.data.name,
            user: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        });
        
        return res.status(200).json(dev);
    }
};