export interface IPaymentContext {
  type: IPaymentType;
  setType(type: IPaymentType): void;
  codePix: any;
  setCodePix: any;
  setObjectPaymentPix: any;
  objectPaymentPix: any;
  isVr: boolean;
  setIsVr(isVr: boolean): void;
  cvvCode: string;
  setCvvCode(cvvCode: string): void;
  typeForPaymentModal: string;
  setTypeForPaymentModal(type: string): void;
}

export type IPaymentType = 'PIX' | 'CREDIT_CARD' | null | 'CARD' | 'VALE';
