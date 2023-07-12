export interface ICardContext {
  selectedMethodNumber: number;
  setSelectedMethodNumber(item: number): void;
  openAddCardModal: boolean;
  setOpenAddCardModal(openAddCardModal: boolean): void;
  setPaymentMethodData: any;
  paymentMethodData: any;
  setAliasName(alias: string): void;
  aliasName: string;
  setCardId(cardId: string): void;
  cardId: string;
  handleChangeAliasCard(storeId: string, serviceId: string): void;
  handleSendCreateCard(values: object, storeId: string, serviceId: string): void;
  setCardExist(cardExist: boolean): void;
  cardExist: boolean;
  handleDeleteCard(storeId: string, serviceId: string): void;
  setErrDeleteCard(ErrDeleteCard: boolean): void;
  errDeleteCard: boolean;
  setSucessDeleteCard(successDeleteCard: boolean): void;
  sucessDeleteCard: boolean;
  setErrCreateCard(ErrCreateCard: boolean): void;
  errCreateCard: boolean;
  setSucessCreateCard(successCreateCard: boolean): void;
  sucessCreateCard: boolean;
  setDeleteCard(deleteCard: boolean): void;
  deleteCard: boolean;
  createdCard: boolean;
  setEitActive(editActive: boolean): void;
  editActive: boolean;
  handleSendCreateCardVr(values: object, storeId: string, serviceId: string): void;
  setBrandIdVr(brandIdVr: string): void;
  setCreatingCreditCard(creatingCreditCard: boolean): void;
  creatingCreditCard: boolean;
  setCreatingDebitCard(creatingDebitCard: boolean): void;
  creatingDebitCard: boolean;
  setCreatingMealTicketCard(creatingMealTicketCard: boolean): void;
  creatingMealTicketCard: boolean;
  setAddNewCard(addNewCard: boolean): void;
  addNewCard: boolean;
  setCardDetails(cardDetails: any): void;
  cardDetails: any;
  token: string;
  setTotalValue: any;
  totalValue: string;
  setServiceIdUser: any;
  serviceIdUser: any;
  editAliasSuccess: boolean;
  editAliasError: boolean;
  setEditAliasSuccess(edit: boolean): void;
  setEditAliasError(edit: boolean): void;
  setActiveCard: any;
  activeCard: any;
  setActivedCard(loading: boolean): void;
  activedCard: boolean;
  brandIdVr: string;
}

export interface ICardData {
  cardNumber: number;
  validity: string;
  cvv: number;
  userCardName: string;
  cpf: number;
  surname: string;
}
export interface ICard {
  alias: string,
  brand: {
    image: string,
    name: string,
  },
  id: string,
  lastDigits: string,
  method: string,
}