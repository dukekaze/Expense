const { Router } = require("express");

const {
  getAllcategory,
  createCategory,
  updCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/").get(auth, getAllcategory).post(auth, createCategory);
router.route("/:id").put(updCategory).delete(deleteCategory);

module.exports = router;
