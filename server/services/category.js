/**
 * @author Ola Wethal Petersen
 * @desc Serivce for kategoridata. Beskriver hvordan dataen skal behandles mot databasen
 * @exports getCategoryById listCategories createCategory
 */

import Category from '../models/category.js';

export const getCategoryById = async (id) => Category.findById(id);

export const listCategories = async () => Category.find().populate();

export const createCategory = async (data) => Category.create(data);
