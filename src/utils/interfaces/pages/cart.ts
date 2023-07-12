export interface ICartData {
  id: number | string;
  amount: number;
  name: string;
  observation: string;
  description: string;
  image: string;
  price: number | string | undefined;
  extras: ICartExtras[];
}

export interface ICartExtras {
  name: string;
  price: number | string;
}
