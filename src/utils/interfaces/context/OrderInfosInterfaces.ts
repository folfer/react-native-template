export type IResumeTypes = 'delivery' | 'withdrawal';

export interface IOrderInfosContext {
  resumeToShow: IResumeTypes;
  setResumeToShow(resume: IResumeTypes): void;
  setSuccessPayment(successPayment: boolean): void;
  setErrorPayment(errorPayment: boolean): void;
  successPayment: boolean;
  errorPayment: boolean;
}
