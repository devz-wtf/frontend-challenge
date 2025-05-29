import axios from 'axios';

const API_KEY = process.env.REACT_APP_FRONTEND_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getArticles = async () => {
  const res = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
  return res.data.articles;
};
