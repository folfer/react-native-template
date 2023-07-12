export interface IWaitlistContext {
  waitlistPosition: any;
  setWaitlistPosition: any;
  cpf: any;
  setCpf: any;
  setGetSelectedStore: any;
  handleEnterinQueue: () => void;
  setPersonCountState(item: string): void;
  checking: boolean;
  setChecking: any;
  setOrderExist: any;
  orderExist: boolean;
  successQueue: boolean;
  setSuccessQueue: any;
  offQueue: boolean;
  setOffQueue: any;
  setQueueStarted: any;
  queueStarted: any;
  personCountState: string;
  queuePosition: IQueuePosition;
  getSelectedStore: any;
  handleLeaveQueue: () => void;
  setLeaveQueueFailed: any;
  setLeaveQueue: any;
  leaveQueue: boolean;
  leaveQueueFailed: boolean;
  setLeaveQueueSuccess: any;
  leaveQueueSuccess: boolean;
}

export interface IQueuePosition {
  id: string;
  position: number;
  status: {
    id: string;
    name: string;
  };
}
