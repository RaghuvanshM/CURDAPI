const User = require('../models/User');

// POST /api/users
exports.createUser = async (req, res, next) => {
  try {
    const { name, age, email, education } = req.body;

    // Check if all fields are provided
   

    // Create a new user
    const user = new User({ name, age, email, education });
    await user.save();

    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    // Check for duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    next(error);  // Pass other errors to error handler
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);  // Pass errors to the error handler
  }
};
