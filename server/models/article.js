import mongoose from 'mongoose';

const { Schema } = mongoose;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingress: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    hidden: {
      type: Boolean,
      select: false,
      default: false,
    },
    image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Image',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      re: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

articleSchema.index({
  title: 'text',
});

const Article = mongoose.model('Article', articleSchema);

export default Article;

// Tittel, forfatter, innhold, dato og undertittel
