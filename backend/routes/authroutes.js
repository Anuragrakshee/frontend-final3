const express = require('express');
const router = express.Router();
const User = require('../models/users');


// Route to register a new user
router.post('/register', async (req, res) => {
  const { name, email, mobile, city } = req.body;       
    try {
        const newUser = new User({ name, email, mobile, city });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;