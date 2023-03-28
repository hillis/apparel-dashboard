export interface Order {
  id: string;
  nickname: string;
  paidInFull: boolean;
  visualId: number;
  url: string;
  visualPoNumber: string;
  workorderUrl: string;
  total: number;
  status: {
    name: string;
  };
}

export enum OrderSortField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  VISUAL_ID = 'VISUAL_ID',
  VISUAL_PO_NUMBER = 'VISUAL_PO_NUMBER',
  STATUS = 'STATUS',
  NICKNAME = 'NICKNAME',
  PAID_IN_FULL = 'PAID_IN_FULL',
}
