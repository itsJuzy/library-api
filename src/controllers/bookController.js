const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch {
    res.status(400);
    res.send({ error: "Unable to get all books!" });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });
    res.status(200).json(book);
  } catch {
    res.status(400);
    res.send({ error: "Book doesn't exist!" });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      about: req.body.about,
      author: req.body.author,
      desc: req.body.desc,
      imagePath: req.body.imagePath,
    });
    res.status(200).json(newBook);
  } catch {
    res.status(400);
    res.send({ error: "Unable to add new book to the database!" });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });

    if (req.body.title) {
      book.title = req.body.title;
    }

    if (req.body.about) {
      book.about = req.body.about;
    }

    if (req.body.author) {
      book.author = req.body.author;
    }

    if (req.body.desc) {
      book.desc = req.body.desc;
    }
    if (req.body.imagePath) {
      book.imagePath = req.body.imagePath;
    }

    await book.save();
    res.send(book);
  } catch {
    res.status(404);
    res.send({ error: "Book doesn't exist!" });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(400);
    res.send({ error: "Book doesn't exist!" });
  }
};

module.exports = { getBooks, getBook, addBook, updateBook, deleteBook };
