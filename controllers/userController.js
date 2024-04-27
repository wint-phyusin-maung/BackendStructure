const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.testingUser = async (req, res) => {
    try {
        res.send('hello world');
    } catch (error) {
        console.error(error);
    }
}

