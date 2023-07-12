export interface ICardOptionFactory {
  getCard(): Promise<any> | null;
  setCard(card: any): void;
  cleanCard(): Promise<any>;
}
