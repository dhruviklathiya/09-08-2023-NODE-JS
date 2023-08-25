const express = require("express");
const validate = require("../../middlewares/validate");
const router = express.Router();

router.get(
    "/list",
    validate(),
);
router.post(
    "/create-grocery",
    validate(),
);
router.delete(
    "/delete-grocery/:groceryId",
    validate(),
);

module.exports = router