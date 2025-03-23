const Author = require("../models/authorModel");

const addAuthor = async (req, res) => {
  try {
    const existingAuthor = await Author.findOne({ name: req.body.name });
    if (existingAuthor) {
      return res.status(400).json({ error: "Author with this name already exists" });
    }
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getAuthorbyId = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!author) return res.status(404).json({ error: "Author not found" });
    res.json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteAuthor = async (req, res) => {
   try {
     const author = await Author.findByIdAndDelete(req.params.id);
     if (!author) return res.status(404).json({ error: "Author not found" });
     res.json({ message: "Author deleted successfully" });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 }

module.exports = {
   addAuthor, getAllAuthors, getAuthorbyId, updateAuthor, deleteAuthor
}