const express = require("express");
const validate = require("../../middlewares/validate");
const { bookValidation } = require("../../validations")
const { bookController } = require("../../controllers")
const router = express.Router();

router.post(
    "/create-book",
    validate(bookValidation.createbookValidate),
    bookController.createbook
)
router.get(
    "/list",
    bookController.booklist
)
module.exports = router;