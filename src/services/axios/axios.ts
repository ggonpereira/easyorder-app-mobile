import axios from 'axios';
import { API_URL } from '@env';

export function getAPIClient() {
  return axios.create({
    baseURL: API_URL,
  });
}
