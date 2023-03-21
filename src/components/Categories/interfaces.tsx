import { Category } from '../../types/Category';

export interface CategoriesProps {
  isLoading?: boolean;
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}
