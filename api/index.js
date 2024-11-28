// index.js
import express from "express";

const app = express();
const PORT = 8080;

// Middleware example
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
