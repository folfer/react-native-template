export interface ICardData {
  cardData: ICard[]
}

interface ICard {
  text: string;
  flag: string;
  principal: boolean;
}

export interface IDataCard {
  id: number;
  alias: string;
  lastDigits: number;
  brand: {
    name: string;
    image: string;
  };
}