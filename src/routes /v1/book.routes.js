const express = require("express");
const validate = require("../../middlewares/validate");
const { bookValidation } = require("../../validations")
const { bookController } = require("../../controllers")
const router = express.Router();

router.post(
    "/create-book",
    validate(bookValidation.createbookValidate),
    bookController.create_book
)
router.get(
    "/list",
    bookController.get_book_list
)
module.exports = router;