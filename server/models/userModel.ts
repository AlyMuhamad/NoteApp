import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { NextFunction } from 'express';

interface User {
  name: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date | number;
  passwordResetToken: string | undefined;
  passwordResetExpires: Date | undefined;
  active: boolean;
}

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide a password'],
    validate: {
      validator: function (this: any, el: string) {
        return el === this.password;
      },
      message: 'passwords are not the same',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// VIRTUAL POPULATING
// userSchema.virtual('notes', {
//   ref: 'Note',
//   foreignField: 'user',
//   localField: '_id',
// });

// DOCUMENT MIDDLEWARE
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

// ANOTHER DOCUMENT MIDDLEWARE
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;

  next();
});

// QUERY MIDDLEWARE
userSchema.pre(/^find/, function (this: any, next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

// INSTANCE METHOD
userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// ANOTHER INSTANCE METHOD
userSchema.methods.changedPasswordAfter = function (JWTTimestamp: any) {
  if (this.passwordChangedAt) {
    const changedTimestamp: any = parseInt(
      (this.passwordChangedAt.getTime() / 1000) as any,
      10,
    );

    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// another instance method for resetting the password
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // password token expires in 10 minutes
  this.passwordResetExpires = Date.now() + 600000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

export default User;
