const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Mongoose schema for a Bible verse
const verseSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  text: { type: String, required: true },
  note: { type: String }, // Optional field for additional notes
});

const Verse = mongoose.model('Verse', verseSchema);

// Route for adding a verse
app.post('/add-verse', async (req, res) => {
  const { reference, text, note } = req.body;

  try {
    const newVerse = new Verse({ reference, text, note });
    await newVerse.save();
    res.redirect('/?message=Verse added successfully!&type=success');
  } catch (err) {
    console.error('Error saving verse:', err);
    res.redirect('/?message=Failed to add verse. Please try again.&type=error');
  }
});

// Fallback route to serve the HTML
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
