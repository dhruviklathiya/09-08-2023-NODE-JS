const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();

router.get(
    "/list",
    validate(),
);
router.post(
    "/create-movie",
    validate(),
);
router.delete(
    "/delete-movie/:movieId",
    validate(),
);

module.exports = router