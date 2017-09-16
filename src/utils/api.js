const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://newsapi.org/v1/articles';

export const getPopularPosts = () => {
  const source = 'google-news';
  const sortBy = 'top';
  const requestURL = `${API_URL}?source=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  return fetch(requestURL)
    .then(response => response.json())
    .then(responseJSON => responseJSON.articles);
};

export const getPopularPostsByCategory = () => {
  const source = 'google-news';
  const sortBy = 'top';
  const requestURL = `${API_URL}?source=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  return fetch(requestURL)
    .then(response => response.json())
    .then(responseJSON => responseJSON.articles);
};

export const getLatestPosts = () => {
  const source = 'reuters';
  const sortBy = 'latest';
  const requestURL = `${API_URL}?source=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`;
  return fetch(requestURL)
    .then(response => response.json())
    .then(responseJSON => responseJSON.articles);
};
