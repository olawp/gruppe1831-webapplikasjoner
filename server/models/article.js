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
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;

// Tittel, forfatter, innhold, dato og undertittel
