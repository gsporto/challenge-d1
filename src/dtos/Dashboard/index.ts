export interface IFilter {
  id: number;
  name: string;
  quantity: number;
}

export interface IJourney {
  name: string;
  status: number;
  recipients: string;
  success: string;
  id: string;
}
