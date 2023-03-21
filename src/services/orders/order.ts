import { api } from '../api';
import {
  PostCreateOrderResponseData,
  PostCreateOrderRequestData,
} from './interfaces';

export async function postCreateOrder({
  table,
  products,
}: PostCreateOrderRequestData) {
  const response = await api.post<PostCreateOrderResponseData>(`/orders`, {
    table,
    products,
  });

  return response?.data;
}
