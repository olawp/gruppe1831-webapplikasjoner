/**
 * @author Ola Wethal Petersen
 * @desc Modell for kontakt schema
 * @exports Contact
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
