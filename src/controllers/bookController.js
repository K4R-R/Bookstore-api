const Book = require("../models/bookModel");

const addBook = async (req, res) => {
  try {
    const existingBook = await Book.findOne({ title: req.body.title });
    if (existingBook) {
      return res.status(400).json({ error: "Book with this title already exists" });
    }
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getBookbyId = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("author");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteBook = async (req, res) => {
   try {
     const book = await Book.findByIdAndDelete(req.params.id);
     if (!book) return res.status(404).json({ error: "Book not found" });
     res.json({ message: "Book deleted successfully" });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 }

module.exports = {
   addBook, getAllBooks, getBookbyId, updateBook, deleteBook
}