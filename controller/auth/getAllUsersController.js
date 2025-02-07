const Auth = require("../../model/authModel");

const getAllUsers = async (req, res) => {
  try {
    const personData = await Auth.find();
    if (!personData) {
      return res.status(404).json({ message: "Person data not found" });
    }
    res.status(200).json(personData);
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

module.exports = getAllUsers;
