const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");

// Routes
app.use("/api/author",authorRoutes);
app.use("/api/book",bookRoutes);

module.exports = app;
