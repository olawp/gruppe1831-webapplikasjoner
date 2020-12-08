/**
 * @author Ola Wethal Petersen
 * @desc Modell for bilde schema
 * @exports Image
 */

import mongoose from 'mongoose';

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    file_path: {
      type: String,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

imageSchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'image',
  justOne: true,
});

export default mongoose.model('Image', imageSchema);
