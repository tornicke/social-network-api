const { Thought } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    return res.status(200).json(allThoughts);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not find thoughts" });
  }
};

const getSingleThought = async (req, res) => {
  try {
    const singleThought = await Thought.findOne({ _id: req.params.ThoughtId });
    return res.status(200).json(singleThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not find thought" });
  }
};

const addThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    return res.status(200).json(newThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not create thought" });
  }
};

const updateThought = async (req, res) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    return res.status(200).json(updateUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not update user" });
  }
};

const deleteThought = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });

    return res.status(200).json(deleteUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not delete user" });
  }
};

module.exports = {
  addThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
};
