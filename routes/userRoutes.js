const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser)

router.get('/testing', userController.testingUser)

router.get('/all-users', userController.getAllUsers)

module.exports = router;