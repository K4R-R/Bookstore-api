const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

// Create a book
router.post("/", bookController.addBook);

// Get all books
router.get("/", bookController.getAllBooks);

// Get book by ID
router.get("/:id", bookController.getBookbyId);

// Update book
router.put("/:id", bookController.updateBook);

// Delete book
router.delete("/:id", bookController.deleteBook);

module.exports = router;
