export interface Order{
    _id?:string;
    userID: number;
    status: string;
    totalAddedQuantity: number;
    grandTotal: number;
  }