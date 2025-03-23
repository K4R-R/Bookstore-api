const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/config/db");

// Loading environment variables
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connecting to db and starting server
const startServer = async () => {
  try {
   // console.log(process.env.MONGO_URI);
    await connectDB();
    const server = http.Server(app);
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();