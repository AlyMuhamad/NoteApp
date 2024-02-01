import mongoose from 'mongoose';
// const validator = require('validator');

interface Note {
  body: string;
  selected: boolean;
  pinned: boolean;
  archived: boolean;
  createdAt: Date;
}

const noteSchema = new mongoose.Schema<Note>({
  body: {
    type: String,
    required: [true, `A note can't be empty`],
    minlength: [3, `A note can't be less than 3 characters`],
    unique: true,
    trim: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  archived: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
