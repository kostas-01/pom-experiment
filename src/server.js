const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Handle chat input
app.post('/api/chat', (req, res) => {
  const userInput = req.body.message;

  // Custom logic using your API key
  const response = getBotReply(userInput);
  res.json({ reply: response });
});

function getBotReply(input) {
  // Your own logic here
  if (input.includes('hello')) return 'Hi there! 👋';
  return 'Sorry, I don’t understand.';
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});