import { ICategory } from '~/utils/interfaces';

export interface ICategoriesContext {
  categories: ICategory[];
  setCategories(categories: ICategory[]): void;
  selectedCategory: ICategory;
  setSelectedCategory(category: ICategory): void;
}
