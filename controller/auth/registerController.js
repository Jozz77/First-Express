// const bcrypt = require("bcrypt");
const Auth = require("../../model/authModel");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({ email, password });

    res.status(201).json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later.", error: error.message });
  }
};

module.exports = registerUser;
