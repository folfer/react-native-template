export interface IMenuProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IMenuSubcategory {
  title: string;
  description: string;
  subCategories: any[];
  products: IMenuProduct[];
}

export interface IMenu {
  id: number;
  name: string;
  description: string;
  subcategories: IMenuSubcategory[];
  sort_order: number;
  products: any[];
}
