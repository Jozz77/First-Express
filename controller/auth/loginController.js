const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../../model/authModel");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const loginUser = async (req, res) => {
  const plainTextPassword = "Jonathan77"; // Replace with the actual password
const hash = "$2b$10$0KNziscfcIh88MWBfi6C6OgI5VPfQiknw.8SD4NOLBKJP5.H1JynS"; // Replace with your hash

bcrypt.compare(plainTextPassword, hash, (err, isMatch) => {
  if (err) console.error("Error:", err);
  console.log("Password Match:", isMatch);
});

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
    // console.log("details", email, password.trim(), user.password, isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful.", ...user, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = loginUser;
