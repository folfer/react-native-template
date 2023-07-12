export interface ICardsMethods {
  id: string,
  name: string,
  sortOrder: number,
}

export interface ICardDetails {
  alias: string,
  brand: {
    image: string,
    name: string,
  },
  id: string,
  lastDigits: string,
  method: string,
}