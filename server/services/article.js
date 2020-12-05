import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';
import { articleService } from './index.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (queryStr) => {
  const filters = new ApiFilters(Article.find(), queryStr)
  .filter()
  .searchByQuery();
  //console.log(filters);
  const articles = await filters.query.populate();
  return {
    results: articles.length,
    data: articles
  }
};

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
