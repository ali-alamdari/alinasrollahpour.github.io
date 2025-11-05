const express = require("express");
const path = require('path');

// Create an Express app
const app = express();

// Define the port
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname)));

// Example route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});