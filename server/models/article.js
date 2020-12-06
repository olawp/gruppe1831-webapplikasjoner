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
      type: String,
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
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

articleSchema.index({
  title: 'text',
});

const Article = mongoose.model('Article', articleSchema);

export default Article;

// Tittel, forfatter, innhold, dato og undertittel
