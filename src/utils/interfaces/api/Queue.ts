export interface IQueueGetResp {
  id: string;
  position: number;
  status: {
    id: string;
    name: string;
  };
}
