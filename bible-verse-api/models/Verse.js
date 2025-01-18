const mongoose = require('mongoose');

const verseSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Verse', verseSchema);
