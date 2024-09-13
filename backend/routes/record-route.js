const { Router } = require("express");

const {
  recordInfo,
  getAllRecord,
  takeChartData,
} = require("../controllers/record-controller");
const router = Router();

router.route("/info").get(recordInfo);
router.route("/").get(getAllRecord);
router.route("/chart").get(takeChartData);
// router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
