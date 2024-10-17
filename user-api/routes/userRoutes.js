const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

// POST request to create a new user
router.post('/users', createUser);
router.get('/userlist', getAllUsers);
module.exports = router;
