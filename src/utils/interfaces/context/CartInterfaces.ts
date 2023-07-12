export interface ICartContext {
  itens: any[];
  obs: String;
  updateObs(item: any): void;
  addItem(item: any): void;
  clean(): void;
  updateItemAmount(itemId: string, action: IUpdateType): void;
  removeItem(itemId: string): void;
}

export type IUpdateType = 'up' | 'down';
