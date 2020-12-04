import mongoose from 'mongoose';

const { Schema } = mongoose;
const officeSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Office = mongoose.model('Office', officeSchema);

export default Office;
