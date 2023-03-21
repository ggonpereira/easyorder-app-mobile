import { CartItem } from '../../types/CartItem';
import { Order } from '../../types/Order';

export type PostCreateOrderRequestData = {
  table: string;
  products: CartItem[];
};

export type PostCreateOrderResponseData = Order[];
