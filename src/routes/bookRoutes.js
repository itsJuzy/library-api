const express = require("express");
const router = express.Router();
const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/all", getBooks);
router.get("/:id", getBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
router.post("/", addBook);

module.exports = router;
