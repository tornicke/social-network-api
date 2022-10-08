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

module.exports = { addUser };
