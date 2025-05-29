import { getArticles } from '../../api/newsApi';
import { Article } from '../models/Article';

export const fetchArticles = async (): Promise<Article[]> => {
  return await getArticles();
};