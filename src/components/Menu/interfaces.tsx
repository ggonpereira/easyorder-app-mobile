import { Product } from '../../types/Product';

export interface MenuProps {
  products: Product[];
  selectedTable: string;
  handleOpenNewOrderModal: () => void;
  isLoading?: boolean;
}
