import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

interface User {
  name: string;
  email: string;
  photo: string;
  password: string;
  passwordConfirm: string | undefined;
  passwordChangedAt: Date;
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
});

// DOCUMENT MIDDLEWARE
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

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
userSchema.methods.changedPasswordAfter = async function (
  JWTTimestamp: number,
) {
  if (this.passwordChangedAt) {
    // check if you need parseInt() here
    const changedTimestamp: number = this.passwordChangedAt.getTime() / 1000;

    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const User = mongoose.model('User', userSchema);
export default User;
