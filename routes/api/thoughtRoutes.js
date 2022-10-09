const {
  addUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userControllers");

const router = require("express").Router();

router.route("/").get(getAllUsers).post(addUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
