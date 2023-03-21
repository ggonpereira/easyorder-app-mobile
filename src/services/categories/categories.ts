import { api } from '../api';
import { GetCategoriesResponseData } from './interfaces';

export async function getCategories() {
  const response = await api.get<GetCategoriesResponseData>(`/categories`);

  return response?.data;
}
