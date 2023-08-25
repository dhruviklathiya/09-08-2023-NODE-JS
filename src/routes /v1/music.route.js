const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();

router.get(
    "/list",
    validate(),
);
router.post(
    "/create-music",
    validate(),
);
router.delete(
    "/delete-music/:musicId",
    validate(),
);

module.exports = router