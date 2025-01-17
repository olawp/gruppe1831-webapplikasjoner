/**
 * @author Ola Wethal Petersen
 * @desc Serivce for artikkeldata. Beskriver hvordan dataen skal behandles mot databasen
 * @exports getArticleById listArticles createArticles updateArticle removeArticle
 */

/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async (queryStr) => {
  const { page, limit } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr)
    .filter()
    .searchByQuery();
  const articles = await filters.query;
  const paginated = await filters.pagination().query.populate('category');
  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
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
