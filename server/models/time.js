/**
 * @author Ola Wethal Petersen
 * @desc Modell for tid schema
 * @exports Contact
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;
const timeSchema = new Schema(
  {
    url: {
      type: String,
    },
    hoursSpent: {
      type: Number,
    },
    minutesSpent: {
      type: Number,
    },
    secondsSpent: {
      type: Number,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Time = mongoose.model('Time', timeSchema);

export default Time;
