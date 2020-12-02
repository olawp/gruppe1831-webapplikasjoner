import Article from '../models/article.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async () => Article.find().populate();

export const createArticle = async (data) => Article.create(data);

export const updateArticle = async (id, data) => {
  await Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
};

export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
