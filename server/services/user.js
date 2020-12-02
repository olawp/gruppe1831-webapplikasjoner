import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password'); // Har på denne biten pga passord har select false attributen satt i modellen.
  }
  return User.findOne(email);
};
