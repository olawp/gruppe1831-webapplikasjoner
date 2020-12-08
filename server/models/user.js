/**
 * @author Ola Wethal Petersen
 * @desc Modell for bruker schema
 * @exports User
 */

import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

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
      minlength: [4, 'Password must contain more than 3 letters'],
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

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

userSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);
  return result;
};

userSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

const User = mongoose.model('User', userSchema);

export default User;
