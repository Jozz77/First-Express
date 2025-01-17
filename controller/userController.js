const User = require("../model/userModel.js");

const createPerson = async (req, res) => {
  try {
    const newPerson = new User(req.body);
    const { name } = newPerson;

    const personExist = await User.findOne({ name });
    if (personExist) {
      return res.status(400).json({ message: "Person already exist" });
    }

    const savedPerson = await newPerson.save();
    res.status(200).json({ message: savedPerson });
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const personData = await User.find();
    if (!personData || personData?.length < 1) {
      return res.status(404).json({ message: "Person data not found" });
    }
    res.status(200).json(personData);
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

const getPersonById = async (req, res) => {
  try {
    const id = req.params.id;
    const personExists = await User.findById(id);

    if (!personExists) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.status(200).json(personExists);
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

const updatePerson = async (req, res) => {
  try {
    const id = req.params.id;
    const personExists = await User.findById(id);

    if (!personExists) {
      return res.status(404).json({ message: "Person not found" });
    }

    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const id = req.params.id;
    const personExists = await User.findById(id);

    if (!personExists) {
      return res.status(404).json({ message: "Person not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error?.message });
  }
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
