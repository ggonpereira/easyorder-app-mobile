import { api } from '../api';
import { GetProductsResponseData } from './interfaces';

export async function getProducts() {
  const response = await api.get<GetProductsResponseData>(`/products`);

  return response?.data;
}
