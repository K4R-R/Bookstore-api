const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

// Create an author
router.post("/", authorController.addAuthor);

// Get all authors
router.get("/", authorController.getAllAuthors);

// Get author by ID
router.get("/:id", authorController.getAuthorbyId);

// Update author
router.put("/:id", authorController.updateAuthor);

// Delete author
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
