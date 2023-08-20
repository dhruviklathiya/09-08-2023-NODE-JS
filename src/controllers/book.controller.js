const { bookService } = require("../services");

const createbook = async (req, res) => {
    try {
      const reqBody = req.body;

      const book = await bookService.createbookService(reqBody);

      res.status(200).json({
        success: true,
        message: "book create successfully!",
        data: { book },
      });
    } catch (error) {
      res.status(400).json({ success: false, message:  error.message});
    }
};

const booklist = async (req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};
            const booklist_ = await bookService.getbooklist();
            res.status(200).json({
              success: true,
              message: "Book list dispatch successfully!",
              data:booklist_
            });
        } catch (error) {
          res.status(400).json({ success: false, message:  error.message});
        }
};

module.exports = {
    createbook,
    booklist
}