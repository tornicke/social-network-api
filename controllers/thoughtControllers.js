const { Thought, User } = require("../models");

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
    const singleThought = await Thought.findOne({ _id: req.params.thoughtId });
    return res.status(200).json(singleThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not find thought" });
  }
};

const addThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    const updateUser = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: newThought.id } },
      { new: true }
    );
    return res.status(200).json(newThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not create thought" });
  }
};

const updateThought = async (req, res) => {
  try {
    const updateThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    return res.status(200).json(updateThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not update thought" });
  }
};

const deleteThought = async (req, res) => {
  try {
    const deleteThought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });

    return res.status(200).json(deleteThought);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not delete thought" });
  }
};

const addReaction = async (req, res) => {
  try {
    const addReaction = await Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    );
    return res.status(200).json(addReaction);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not add reaction" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const deleteReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionID: req.params.reactionId } } },
      { new: true }
    );

    return res.status(200).json(deleteReaction);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not delete reaction" });
  }
};

module.exports = {
  addThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
