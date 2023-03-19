import { Product } from '../../types/Product';

export interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  addItemToCart: (p: Product) => void;
}
