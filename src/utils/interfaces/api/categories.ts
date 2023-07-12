export interface ICategory {
  id: string;
  description: string;
  marketplaceId: string;
  products: IProduct[];
  name: string;
  parentId: string;
  sortOrder: number;
  translate: any;
  image: string;
}

export interface IPaymentMethods {
  id: string,
  name: string,
  sortOrder: number
}

export interface ICategoryResp {
  categories: ICategory[];
}

export interface IMenuCategory {
  id: string;
  description: string;
  name: string;
  sortOrder: number;
  products: IProduct[];
  image: string;
  subCategories: ISubCategories[];
}

export interface IAdressResp {
  completeAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  province: string;
  zipCode: string;
}

export interface ICoordinates {
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ISubCategories {
  id: string;
  name: string;
  description: string;
  sortOrder: number;
  subCategories?: string;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  description: string;
  name: string;
  sortOrder: number;
  productStore?: {
    price: number | string;
    storeId: string;
  };
  image: string;
  tags: any[];
  variants: any[];
  variations: any[];
  price?: number;
  marketplaceId: string;
}
export interface IMenuCategoryResp {
  categories: IMenuCategory;
}
