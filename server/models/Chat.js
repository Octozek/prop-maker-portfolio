const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const chatSchema = new Schema({
  chatText: {
    type: String,
    required: true,
    minlength: 1,
  },
  chatAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;
