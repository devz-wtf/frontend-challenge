import axios from 'axios';

const API_KEY = process.env.REACT_APP_FRONTEND_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function getTopHeadlines(category = 'general', page = 1) {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: 'us',
      category,
      page,
      pageSize: 5,
      apiKey: API_KEY,
    },
  });

  return response.data;
}