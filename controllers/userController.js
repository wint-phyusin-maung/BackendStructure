const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Username, email, and password are required." });
        }
        const user = await User.create(req.body);
        const userJson = {
            id: user._id,
            username: user.username,
            email: user.email
        };
        res.status(201).json({ user: userJson });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.testingUser = async (req, res) => {
    try {
        res.send('hello world');
    } catch (error) {
        console.error(error);
    }
}

