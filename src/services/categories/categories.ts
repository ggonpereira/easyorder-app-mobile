import { api } from '../api';
import {
  GetCategoriesResponseData,
  GetProductsByCategoryResponseData,
} from './interfaces';

export async function getCategories() {
  const response = await api.get<GetCategoriesResponseData>(`/categories`);

  return response?.data;
}

export async function getProductsByCategory(categoryId: string) {
  const response = await api.get<GetProductsByCategoryResponseData>(
    `/categories/${categoryId}/products`,
  );

  return response?.data;
}
