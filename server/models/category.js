import mongoose from 'mongoose';

const { Schema } = mongoose;
const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

categorySchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
  unique: true,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
