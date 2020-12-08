/** 
 * @author Ola Wethal Petersen
 * @desc Denne funksjonen står for oppkobling mot database. Eksempel tatt fra pensum
 * @exports databaseConnection
 */

import mongoose from 'mongoose';
import { dbPort } from '../constants/index.js';

const databaseConnection = async () => {
  let db;

  try {
    db = await mongoose.connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to Mongo on: ${db.connection.host}:${dbPort}`);
};

export default databaseConnection;
