// backend/server.js
const express = require('express');  // import express
const app = express();                // create app
const PORT = process.env.PORT || 3000;  // use environment port or default 3000

// Optional test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server on 0.0.0.0 so Docker can expose it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
