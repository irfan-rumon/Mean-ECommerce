export interface OrderProduct {
    id?: number;
    productID: number;
    userID: number;
    imageURL: string;
    name: string;
    unitPrice : number;
    quantity: number;
    brand: string;
    subtotal: number;
  }