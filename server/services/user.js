import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const getUserById = async (id) => User.findById(id);

export const getUserByEmail = async (email) => User.findOne(email);
