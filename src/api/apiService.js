import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http:/localhost:4002',
});

export default apiService;
