import { IProduct } from '~/utils';
export interface IItemDetailsContext {
  combineItems: number[];
  currentItem: IProduct;
  setCombineItems: any;
  cleanCombineItems(): void;
  setCurrentItem(item: IProduct): void;
  addCombineItems(id: number): void;
  decreaseCombineItems(id: number): void;
  isEdition: { flag: boolean, indexId: any }
  setIsEdition: any;
  prepareCart: any;
  cardPrepared: any;
}
