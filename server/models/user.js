import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: [validator.isEmail, 'Email is not valid'],
    },
    password: {
      type: String,
      required: [true, 'A password is required'],
      minlength: [3, 'Password must contain more than 3 letters'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: 'There can only be one admin, defaulted to user',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

// Brått en ref her??

const User = mongoose.model('User', userSchema);

export default User;
