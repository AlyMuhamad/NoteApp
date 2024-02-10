import mongoose from 'mongoose';
// const validator = require('validator');

interface Note {
  body: string;
  pinned: boolean;
  archived: boolean;
  createdAt: Date;
  user: any;
  toJSON: any;
  toObject: any;
}

const noteSchema = new mongoose.Schema<Note>({
  body: {
    type: String,
    required: [true, `A note can't be empty`],
    minlength: [3, `A note can't be less than 3 characters`],
    unique: true,
    trim: true,
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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A note must belong to a user'],
  },

  // toJSON: { virtuals: true },
  // toObject: { virtuals: true },
});

//  POPULATING
// noteSchema.pre(/^find/, function (this: any, next) {
//   this.populate({ path: 'user', select: '-__v -passwordChangedAt' });
//   next();
// });

const Note = mongoose.model('Note', noteSchema);

export default Note;
