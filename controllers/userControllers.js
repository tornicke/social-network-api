const { User } = require("../models");

const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not create User" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not find users" });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends");
    return res.status(200).json(singleUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not find user" });
  }
};

const updateUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndDelete({ _id: req.params.userId });

    return res.status(200).json(deleteUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not delete user" });
  }
};

const addFriend = async (req, res) => {
  try {
    const addFriend = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    );
    return res.status(200).json(addFriend);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not add friend" });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const deleteFriend = await User.findByIdAndDelete(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    );

    return res.status(200).json(deleteFriend);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Could not delete friend" });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
