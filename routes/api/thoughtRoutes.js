const {
  getAllThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers");

const router = require("express").Router();

router.route("/").get(getAllThoughts).post(addThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route(":thoughtId/reactions").post(addThought).delete(deleteThought);

module.exports = router;
